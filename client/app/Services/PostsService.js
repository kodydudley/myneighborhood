import { ProxyState } from "../AppState.js"
import Post from "../Models/Account.js"

class PostsService {
  constructor() {
    console.log("hellow from Post Service");
  }
}

export const postsService = new PostsService()