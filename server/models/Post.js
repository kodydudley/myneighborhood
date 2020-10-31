import mongoose from "mongoose";
const Schema = mongoose.Schema;

// constructor(data) {
//   this.postId = data.postId
//   this.creatorId = data.creatorId
//   this.captionId = data.captionId
//   this.imgUrl = data.imgUrl
//   this.comments = []
//   this.posts = 0
// }

const Post = new Schema({
  creatorId: {
    type: String,
    ref: "Profile",
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: false
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

Post.virtual("creator", {
  localField: "creatorId",
  ref: "Profile",
  foreignField: "_id",
  justOne: true
});

export default Post;