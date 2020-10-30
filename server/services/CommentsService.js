import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";

class CommentsService {
  async getAll(query = {}) {
    let comments = await dbContext.Comments.find(query);
    return comments;
  }
  async getOne(id) {
    let comment = await dbContext.Comments.findById(id);
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }
}

export const commentsService = new CommentsService();