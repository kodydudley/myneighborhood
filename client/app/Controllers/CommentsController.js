import {
  ProxyState
} from "../AppState.js"
import {
  commentsService
} from "../Services/CommentsService.js"
import Post from '../Models/Post.js'


export default class CommentsController {
  _draw() {

  }
  constructor() {
    console.log("Hello from CommentsController");


  }

  delete(id) {
    commentsService.delete(id)
  }
  addComment(event, postId) {
    event.preventDefault()
    let form = event.target

    let newComment = {
      content: form.content.value,
      postId: postId
    }

    form.reset()

    commentsService.addComment(newComment)
  }

}