import { ProxyState } from "../AppState.js"
import Post from "../Models/Post.js"


class PostsService {
  constructor() {
    console.log("hellow from Post Service");
  }
  submitPost(newPost) {
    let temp = ProxyState.feed
    temp.push(new Post(newPost))
    ProxyState.feed = temp
  }
}

export const postsService = new PostsService()