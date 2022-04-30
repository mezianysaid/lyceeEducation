const express = require('express');
const router = express.Router();
const Comment = require('../_models/comment.model');
const User = require('../_models/user.model');


router.get('/list', async(req, res) => {
    try {
        const comments = await Comment.find({}).populate({ path: 'user', populate: { path: 'image' } }).exec();
        res.status(200).send(comments);
    } catch (error) {
        res.send(error);
    }
});
// ADD COMMENT
router.post('/Add/:id', async(req, res) => {

    const user = await User.findById({ _id: req.params.id });

    var comment = new Comment({
        comments: req.body.Comment,
        user: user
    });
    try {
        await comment.save();

        return res.status(200).json("THE COMMENT HAS BEEN ADDED :)");
    } catch (error) {
        res.send(error);
        res.status(500).json("Error in saving the comment");
    }
});

//DELETE COMMENT
router.delete('/Delete/:id', async(req, res) => {
    try {
        const userdel = await Comment.deleteOne({ _id: req.params.id });
        res.send(['THE COMMENT HAS BEED DELETED']);
    } catch (error) {
        res.status(500).send(['THIS COMMENT CAN\'T DELETE']);
    }
})

module.exports = router;