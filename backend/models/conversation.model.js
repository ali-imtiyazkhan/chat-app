import mongoose from "mongoose";
import Message from "./message.model.js";

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ],

    messages : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:Message,
            default : []
        }
    ]
},{timestamps:true})

export default conversationSchema