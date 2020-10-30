import mongoose from "mongoose";
const Schema = mongoose.Schema;

// constructor(data) {
//   this.commentId = data.commentId
//   this.creatorId = data.creatorId
//   this.postId = data.postId
//   this.content = data.content

// }

const Comment = new Schema({
  commentId: {
    type: String,
    required: true
  },
  creatorId: {
    type: String,
    required: true
  },
  postId: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

Comment.virtual("creator", {
  localField: "creatorId",
  ref: "Profile",
  foreignField: "_id",
  justOne: true
});

export default Comment;