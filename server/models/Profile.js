import mongoose from "mongoose";
const Schema = mongoose.Schema;

// constructor(data) {
//   this._id = data._id
//   this.name = data.name
//   this.bio = data.bio
//   this.imgUrl = data.imgUrl
//   this.favorites = []
//   this.posts = []

const Profile = new Schema({
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
  },
  subs: [{
    type: String,
    unique: true
  }],
  _id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true
  },
  picture: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

Profile.virtual("creator", {
  localField: "creatorId",
  ref: "Profile",
  foreignField: "_id",
  justOne: true
});

export default Profile;