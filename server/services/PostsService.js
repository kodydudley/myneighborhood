import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";
import Post from "../models/Post"


class PostsService {
  async create(body) {
    return await dbContext.Posts.create(body)
  }
  async edit(postId, body) {
    return await dbContext.Posts.findByIdAndUpdate(postId, body)
  }
  async getMyPosts(userId) {
    return await dbContext.Posts.find({
      creatorId: userId
    })
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