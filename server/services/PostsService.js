import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";

class PostsService {
  async getMyPosts(userId) {
    return await dbContext.Posts.find(creatorId == userId)
  }
  async delete(postId) {
    let exists = await dbContext.Posts.findById(postId)
    if (!exists) {
      throw new BadRequest("This post does not exist!")
    }
    await dbContext.Posts.findByIdAndDelete(postId)
    return "Your post has been deleted!"
  }
  async getAll(query = {}) {
    return await dbContext.Posts.find(query);
  }
}

export const postsService = new PostsService();