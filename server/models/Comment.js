import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

// constructor(data) {
//   this.commentId = data.commentId
//   this.creatorId = data.creatorId
//   this.postId = data.postId
//   this.content = data.content

// }

const Comment = new Schema({
  creator: {
    type: String,
    required: true,
    ref: "Profile"
  },
  content: {
    type: String,
    required: true,
  },
  postId: {
    type: ObjectId,
    required: true,
    ref: "Post"
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});


export default Comment;