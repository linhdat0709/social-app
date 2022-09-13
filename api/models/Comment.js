const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        desc:{
            type: String,
            max : 500,
        },
        userId : {
            type:String,
        },
        postId : {
            type: String ,
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Comment", CommentSchema);
