import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),

  // ✅ Add this function to append new messages
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));

export default useConversation;
