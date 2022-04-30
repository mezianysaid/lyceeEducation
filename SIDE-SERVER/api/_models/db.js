const mongoose = require('mongoose');
const config = require('../_config/config');

mongoose.connect(config.DB_Connection, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("SERVER IS RUNNING")
);
const db = mongoose.connection;





db.once('open', () => {
    console.log("CONNECTED SUCCESSFULLY")
});