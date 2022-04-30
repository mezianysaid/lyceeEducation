const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pdfSchema = new Schema({
    pdfname: {
        type: String,
    },
    pdfpath: {
        type: String,
    },
    lesson: {
        type: Schema.Types.ObjectId,
        ref: 'lisson'
    }
});

module.exports = mongoose.model('pdf', pdfSchema);