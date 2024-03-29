const mongoose = require('mongoose');
const passport = require('passport');
const Users = require('../_models/user.model');
const _ = require('lodash');
const multer = require('multer');
const express = require('express');
const gallarys = require('../_models/gallery.model')
var router = express.Router();
var JwtHelper = require('../_config/JwtHelper');
const config = require('../_config/config')
var diskstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        const mimeType = file.mimetype.split('/');
        const fileType = mimeType[1];
        const fileName = file.originalname;
        cb(null, fileName);
        // cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
});
const FileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpg", "image/png", "image/jpeg"];
    allowedMimeTypes.includes(file.mimeType) ? cb(null, true) : cb(null, false);
}
var storage = multer({ storage: diskstorage }).single('image');
router.post('/register', storage, async(req, res, ) => {
    var usr = new Users();
    usr.fullName = req.body.fullName;
    usr.email = req.body.email;
    usr.password = req.body.password;
    if (req.body.Roles) {
        if (req.body.Roles == 'ADMIN') {
            if (req.body.idadmin === config.Code_admin) {
                usr.Roles = req.body.Roles;
            } else { usr.Roles }
        } else { usr.Roles }
    } else { usr.Roles }

    try {
        await usr.save((err, doc) => {
            if (!err) {
                res.send({ status: true, message: "the user has been added succesfully" + doc });
            } else {
                if (err.code == 1100) {
                    res.status(500).send('Duplicate email address found : this email is already exist try another one please  !');
                } else next(err)
                res.send(err);
            }
        })
    } catch (error) {
        return res.send({ status: true, message: "error in adding the user" + error });
    }
});
//Authenticate
router.post('/Authenticate', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        //error from passport meddleware
        if (err) {
            // console.log(err);
            return res.status(500).json(err.message);
        }
        //registered users
        else if (user) {
            return res.status(200).json({ "token": user.generateJwt() });
        }

        //unknown user or wrong password
        else {
            // console.log("Error :", info.message);
            return res.status(404).send(info.message);
        }
    })(req, res);
});
////// GET USER DETAILS
router.get('/details', JwtHelper.verifyJwtToken, (req, res, next) => {
    Users.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found' });
            else {
                return res.status(200).json({ status: true, user: _.pick(user, ['_id', 'fullName', 'email', 'Roles', 'image']) });
            }
        }).populate('image')
});
router.get('/ListUsers', async(req, res, next) => {
    try {
        const Userss = await Users.find().populate("image");
        res.status(200).send(Userss);
        // console.log('your users are:', Users);
    } catch (err) {
        res.send(err);
        return res.status(404).json({ status: false, message: "there is an Error in fetching your users:" + err });
    }
});
//module
router.delete('/Delete/:id', async(req, res) => {
    try {
        const userdel = await Users.deleteOne({ _id: req.params.id });
        // console.log('the user has deleted', userdel);
        return res.status(200).send("THE USER HAS BEEN DELETED SUCCESSFULLY !");
    } catch (error) {
        // console.log('error', error);
        return res.status(500).send("ERROR: YOU CAN'T DELETE THIS USER !");
    }
});

router.put('/upImage/:id', storage, async(req, res) => {

    var newImage = {};
    // var ImagePath = '';
    if (req.file.originalname) {
        newImage.ImagePath = 'http://localhost:3100/uploads/' + req.file.originalname;
    }

    try {
        const up = await Users.updateOne({ _id: req.params.id }, newImage);
        // console.log('file uploaded', up);
    } catch (error) {
        res.send(error);

    }

});

router.post('/addImage', storage, async(req, res) => {
    usr = await Users.findById({ _id: req.body.id })
    console.log(usr)
    const gallary = new gallarys({
        filename: 'http://localhost:3300/uploads/' + req.file.originalname,
        user: usr
    })
    try {
        await gallary.save();
        usr.image = gallary;
        const sr = await usr.save();
        // console.log(sr)
        return res.json({ status: 500, message: "the image has been added succesfully" });
    } catch (error) {
        return res.json({ status: true, message: error })
    }
})
module.exports = router;