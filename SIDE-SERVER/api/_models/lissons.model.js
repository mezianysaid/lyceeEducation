var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var schemalisson = new Schema({
    title: {
        type: String,
    },
    module: {
        type: String,
    },
    blogs: [{
        type: Schema.Types.ObjectId,
        ref: 'subject'
    }],
    tds: [{
        type: Schema.Types.ObjectId,
        ref: 'td'
    }],
    pdfs: [{
        type: Schema.Types.ObjectId,
        ref: 'pdf'
    }]
});

module.exports = mongoose.model('lisson', schemalisson);