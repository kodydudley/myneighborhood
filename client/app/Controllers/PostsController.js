import { ProxyState } from "../AppState.js"
import { postsService } from "../Services/PostsService.js"
export default class PostsController {
  _draw() {
    let template = ""
    let feed = ProxyState.feed
    feed.forEach(p => template += p.Template)
    document.getElementById("feed").innerHTML = template
  }

  constructor() {
    ProxyState.on("feed", this._draw)
    console.log("Hello from PostController");
  }

  getFeed() {
    try {
      postsService.getFeed()
    } catch (error) {
      console.error(error)
    }
  }


  editPost(e, id) {
    e.preventDefault()
    let form = e.target
    let editedPost = {

    }
    form.reset()
    postsService.editPost(editedPost)

  }

  deletePost(id) {
    try {
      postsService.deletePost(id)
    } catch (error) {
      console.error(error)
    }
  }
  submitPost(e) {
    e.preventDefault()
    let form = e.target
    let newPost = {
      imgUrl: form.imgUrl.value,
      caption: form.caption.value,
      // postId: 
    }
    form.reset()
    postsService.submitPost(newPost)
  }
}