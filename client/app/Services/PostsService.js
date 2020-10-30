import { ProxyState } from "../AppState.js"
import Post from "../Models/Post.js"
import { api } from "./AxiosService.js";


class PostsService {
  constructor() {
    console.log("hellow from Post Service");
    this.getFeed()
  }
  deletePost(id) {
    api.delete('/posts/' + id).then(res => {
      this.getFeed()
    }).catch(err => console.error(err))
  }
  async getFeed() {
    let res = await api.get('posts')
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