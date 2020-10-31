import {
  ProxyState
} from "../AppState.js"
import {
  postsService
} from "../Services/PostsService.js"
export default class PostsController {
  _draw() {
    let template = ""
    let posts = ProxyState.posts
    posts.forEach(p => template += p.Template)
    document.getElementById("feed").innerHTML = template
  }

  constructor() {
    ProxyState.on("posts", this._draw)
    ProxyState.on("comments", this._draw)

    console.log("Hello from PostController");
  }

  like(id) {

    let temp = ProxyState.posts
    let editedPost = temp.find(p => p.postId == id)
    editedPost.likes++
    ProxyState.posts = temp
    postsService.like(id, editedPost)
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