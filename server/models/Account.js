import mongoose from "mongoose";
const Schema = mongoose.Schema;

// constructor(data) {
//   this._id = data._id
//   this.name = data.name
//   this.bio = data.bio
//   this.imgUrl = data.imgUrl
//   this.favorites = []
//   this.posts = []

const Account = new Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

Account.virtual("creator", {
  localField: "creatorId",
  ref: "Profile",
  foreignField: "_id",
  justOne: true
});

export default Account;