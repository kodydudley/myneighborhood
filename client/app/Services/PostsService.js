import { ProxyState } from "../AppState.js"
import Post from "../Models/Post.js"
import { api } from "./AxiosService.js";


class PostsService {
  constructor() {
    console.log("hellow from Post Service");
    this.getFeed()
  }
  like(id, editedPost) {
    api.put('/posts/' + id, editedPost).then(res => {
      debugger
      this.getFeed()
    }).catch(err => console.error(err))
  }
  deletePost(id) {
    api.delete('/posts/' + id).then(res => {
      this.getFeed()
    }).catch(err => console.error(err))
  }
  async getFeed() {
    let res = await api.get('posts')
    console.log("get feed");
    ProxyState.posts = res.data.map(p => new Post(p))
  }

  editPost(editedPost) {
    api.put('/posts/' + editedPost._id, editedPost).then(res => {
      this.getFeed()
    }).catch(err => console.error(err))
  }
  submitPost(newPost) {
    api.post("/posts", newPost).then(res =>
      this.getFeed()
    ).catch(err => console.error(err))

    // let temp = ProxyState.feed
    // temp.unshift(new Post(newPost))
    // ProxyState.feed = temp
  }
}

export const postsService = new PostsService()