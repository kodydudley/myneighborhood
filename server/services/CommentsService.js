import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";
import Comment from "../models/Comment"


class CommentsService {
  async edit(commentId, body) {
    return await dbContext.Comments.findByIdAndUpdate(commentId, body)
  }
  async getMycomments(userId) {
    return await dbContext.Comments.find({
      creatorId: userId
    })
  }
  async delete(commentId) {
    let exists = await dbContext.Comments.findById(commentId)
    if (!exists) {
      throw new BadRequest("This comment does not exist!")
    }
    await dbContext.Comments.findByIdAndDelete(commentId)
    return "Your comment has been deleted!"
  }
  async getAll(query = {}) {
    return await dbContext.Comments.find(query);
  }
}

export const commentsService = new CommentsService();