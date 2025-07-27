import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReciverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    console.log("message:", message);
    console.log("senderId:", senderId);
    console.log("receiverId:", receiverId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId], $size: 2 },
    });

    if (!conversation) {
      console.log("No existing conversation. Creating one...");
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    console.log("Conversation ID:", conversation._id);

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
      conversationId: conversation._id,
    });

    console.log("Message created:", newMessage);

    const reciverSocketId = getReciverSocketId(receiverId);
    if (reciverSocketId) {
      io.to(reciverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json({
      success: true,
      message: newMessage.message,
      data: newMessage,
    });

  } catch (error) {
    console.error("❌ Error in sendMessage controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getMessages = async (req, res) => {
  try {
    const { id: userToChat } = req.params; 
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat], $size: 2 },
    });

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "No conversation found between these users",
      });
    }

    const messages = await Message.find({ conversationId: conversation._id }).sort({ createdAt: 1 });

    console.log("messages: ", messages);

    res.status(200).json({
      success: true,
      data: messages,
    });

  } catch (error) {
    console.error("❌ Error in getMessages controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const clearMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId], $size: 2 },
    });

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "No conversation found to clear.",
      });
    }

    await Message.deleteMany({ conversationId: conversation._id });

    res.status(200).json({
      success: true,
      message: "All messages cleared successfully.",
    });
  } catch (error) {
    console.error("❌ Error in clearMessages controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
