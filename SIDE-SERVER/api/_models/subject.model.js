var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var schema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    lisson: {
        type: Schema.Types.ObjectId,
        ref: 'lisson'
    },
    images: [{
        type: Schema.Types.ObjectId,
        ref: 'gallary'
    }]
});

module.exports = mongoose.model('subject', schema);