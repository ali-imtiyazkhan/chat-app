import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderId : {
        type : mongoose.Types.ObjectId,
        ref:"user",
        required : true
    },

    reciverId : {
        type: mongoose.Types.ObjectId,
        ref : "user",
        required : true
    },

    message:{
        type:String,
        required : true

    }
},{timestamps : true});

const Message = mongoose.Model("Message",messageSchema);

export default Message