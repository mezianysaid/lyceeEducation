const express = require('express');
const router = express.Router()
const multer = require('multer');
const lissons = require('../_models/lissons.model');
const subjects = require('../_models/subject.model');
const gallarys = require('../_models/gallery.model');
const tds = require('../_models/td.model');
const pdfs = require('../_models/pdf.model')
var diskstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        const mimeType = file.mimetype.split('/');
        // const fileType = mimeType[1];
        const fileName = file.originalname;
        cb(null, fileName);
        // cb(null, file.filename + '-' + Date.now());
    }
});
var storage = multer({ storage: diskstorage }).single('image');


router.post('/addBlog', async(req, res) => {
    // console.log(req.body.cours)
    cours = await lissons.findById({ _id: req.body.cours })
    const subject = new subjects({
        title: req.body.title,
        description: req.body.description,
        lisson: cours
    })
    try {
        await subject.save();
        cours.blogs.push(subject)
        await cours.save();

        // await subject.save();
        return res.json({ status: 500, message: "the blog added succesfully" });
    } catch (error) {
        return res.json({ status: true, message: error })
    }
});

router.post('/addlisson', async(req, res) => {

    try {
        let les = new lissons({
            title: req.body.lisson,
            module: req.body.modole
        })
        let cc = await les.save();
        return res.json({ status: 500, message: "the lisson has been added succesfully" });
    } catch (error) {
        return res.json({ status: 200, message: error });
    }
});


router.get('/listLissons/:categ', async(req, res) => {
    try {
        courses = await lissons.find({ module: req.params.categ }).populate({ path: 'blogs', populate: { path: 'images' } }).populate({ path: 'tds', populate: { path: 'images' } }).populate('pdfs');

        return res.send(courses)
    } catch (error) {
        return res.send({ status: true, message: 'error in fetching the courses' })
    }
})

router.post('/addImage', storage, async(req, res) => {
    blog = await subjects.findById({ _id: req.body.id })
    const gallary = new gallarys({
        filename: 'http://localhost:3300/uploads/' + req.file.originalname,
        subjectId: blog
    })
    try {
        await gallary.save();
        blog.images.push(gallary);
        await blog.save();
        return res.json({ status: 500, message: "the blog added succesfully" });
    } catch (error) {
        return res.json({ status: true, message: error })
    }
})

//  tds  /////////////////////////
router.post('/addTd', async(req, res) => {
    cours = await lissons.findById({ _id: req.body.cours })
    const td = new tds({
        title: req.body.title,
        description: req.body.description,
        lisson: cours,
    })
    try {
        await td.save();
        cours.tds.push(td)
        await cours.save();
        return res.json({ status: 500, message: "the blog has been added succesfully" });
    } catch (error) {
        return res.json({ status: true, message: error })
    }
})

router.post('/addTdImage', storage, async(req, res) => {
    td = await tds.findById({ _id: req.body.id })
    const gallary = new gallarys({
        filename: 'http://localhost:3300/uploads/' + req.file.originalname,
        Tds: td
    })
    try {
        await gallary.save();
        td.images.push(gallary);
        await td.save();
        return res.json({ status: 500, message: "the blog has been added succesfully" });
    } catch (error) {
        return res.json({ status: true, message: error })
    }
})

router.post('/addPdf', storage, async(req, res) => {
    // console.log(req.body.id, req.file.originalname)
    let lesson = await lissons.findOne({ _id: req.body.id }).exec()
    let pdf = new pdfs({
        pdfname: req.file.originalname,
        pdfpath: 'http://localhost:3300/uploads/' + req.file.originalname,
        lesson: lesson
    })
    try {
        await pdf.save();
        lesson.pdfs.push(pdf)
        let cc = await lesson.save()
    } catch (error) {
        return res.send({ status: true, message: error })
    }




})

router.get('/Search/:title', async(req, res) => {
    try {
        const lessons = await (await lissons.find({ title: req.params.title }).populate({ path: 'blogs', populate: { path: 'images' } }).populate({ path: 'tds', populate: { path: 'images' } }).populate('pdfs'));
        return res.send(lessons)

    } catch (error) {
        return res.send({ status: true, message: "Not Found any lessons" })
    }
})

module.exports = router;
// module.exports = router;