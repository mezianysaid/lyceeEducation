const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    createAt: { type: Date, default: mongoose.now },
    comments: { type: String, required: "this Field Can\'t be Empty" },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
})
module.exports = mongoose.model('comment', CommentSchema);