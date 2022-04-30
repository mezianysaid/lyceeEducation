var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var schemaTd = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    lesson: {
        type: Schema.Types.ObjectId,
        ref: 'lisson'
    },
    images: [{
        type: Schema.Types.ObjectId,
        ref: 'gallary'
    }]

});

module.exports = mongoose.model('td', schemaTd);