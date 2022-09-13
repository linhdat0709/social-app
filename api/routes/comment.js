const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

// create a comment
router.post("/", async (req, res) => {
  const newComment = new Comment(req.body)
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get comment

router.get("/:postId" , async (req , res) => {
    try{
    const comment = await Comment.find({
        postId:req.params.postId,
    })
    res.status(200).json(comment)
    }catch(err){
        res.status(err).json(err)
    }
})

module.exports = router;
