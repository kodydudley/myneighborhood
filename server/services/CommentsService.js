import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";
import Comment from "../models/Comment"


class CommentsService {
  async create(body) {
    return await dbContext.Comments.create(body)
  }
  async edit(commentId, body) {
    return await dbContext.Comments.findByIdAndUpdate(commentId, body)
  }
  async delete(commentId, userId) {
    let exists = await dbContext.Comments.findById(commentId)
    if (!exists) {
      throw new BadRequest("This comment does not exist!")
    } else if (exists._doc.creator == userId) {
      await dbContext.Comments.findByIdAndDelete(commentId)
      return "Your comment has been deleted!"
    }
  }
  async getAll(postId) {
    return await dbContext.Comments.find({
      postId: postId
    }).populate("creator")
  }
}

export const commentsService = new CommentsService();