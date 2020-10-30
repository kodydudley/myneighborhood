import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
import Post from '../Models/Post.js'


export default class CommentsController {
  _draw() {

  }

  addComment(e, postId, creatorId) {
    e.preventDefault()
    let form = e.target
    let newComment = {
      content: form.content.value

    }
  }

  constructor() {
    console.log("Hello from CommentsController");
  }
}