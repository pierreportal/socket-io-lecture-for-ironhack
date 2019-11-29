const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    content: String,
    postedBy: { type: Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;