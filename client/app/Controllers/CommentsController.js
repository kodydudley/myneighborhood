import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
import Post from '../Models/Post.js'

export default class CommentsController {
  _draw() {
    let template = ""
    ProxyState.feed.posts.comments.map(c => template += c.Template)
  }

  constructor() {
    console.log("Hello from CommentsController");
  }
}