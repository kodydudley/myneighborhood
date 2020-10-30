import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import AccountSchema from "../models/Account";
import CommentSchema from "../models/Comment";
import PostSchema from "../models/Post";



class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);

  Accounts = mongoose.model("Account", AccountSchema);
  Comments = mongoose.model("Comment", CommentSchema);
  Posts = mongoose.model("Post", PostSchema);

}

export const dbContext = new DbContext();