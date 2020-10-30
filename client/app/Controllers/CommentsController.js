import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
import Post from '../Models/Post.js'


export default class CommentsController {
  _draw() {

  }
  constructor() {
    console.log("Hello from CommentsController");
  }

  addComment(event) {
    event.preventDefault()
    let form = event.target
    let newComment = {
      content: form.content.value
    }
    form.reset()
    commentsService.addComment(newComment)
  }

}