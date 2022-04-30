const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// var logger = require('morgan');
var passport = require('passport');
var multer = require('multer');
require('./api/_models/db');
require('./api/_config/passport');
// var upload = multer({ dest: 'upload/' });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(passport.initialize());
// app.use('/api/user', express.static('uploads'));

//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valError = [];
        Object.keys(err.errors).forEach(key => valError.push(err.errors[key].message));
        res.status(422).send(valError);
    }
});
app.use('/uploads', express.static('uploads'));
// app.use('/uploadVideos', express.static('uploadVideos'));

//GET USER'S ROUTE
const user_Router = require('./api/_routes/userRoute.router');
app.use('/api/user', user_Router);

//GET COMMENT'S ROUTE
const comment_Router = require('./api/_routes/commentRoute.router');
app.use('/api/comment', comment_Router);

const subject_router = require('./api/_routes/subjectRoute.router')
app.use('/api/subject', subject_router)

// BAK2'S ROUTE 
const bak2_router = require('./api/_routes/bak2Router.router')
app.use('/api/bak2', bak2_router)

// 5 EME'S ROUTE 
const eme5_router = require('./api/_routes/eme5Router.router')
app.use('/api/eme5', eme5_router)





app.listen(3300 || 3000);