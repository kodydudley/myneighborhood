import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"

export default class CommentsController {
  _draw() {
    let template = ""
    ProxyState.feed.post.comments.map(c => template += c.Template)
  }

  constructor() {
    console.log("Hello from CommentsController");
  }
}