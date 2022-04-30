const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GallySchema = new Schema({
    filename: {
        type: String,
    },
    subjectId: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    Tds: {
        type: Schema.Types.ObjectId,
        ref: 'td'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('gallary', GallySchema);