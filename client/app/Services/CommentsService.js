import {
  ProxyState
} from "../AppState.js"
import Comment from "../Models/Comment.js"
import {
  api
} from "./AxiosService.js";

class CommentsService {

  constructor() {
    console.log("hellow from Comment Service");


  }
  delete(id, postId) {
    api.delete('/comments/' + id).then(res => {
      this.getPostComments(postId)

    }).catch(err => console.error(err))
  }

  addComment(newComment, id) {
    api.post("/comments", newComment).then(res =>
      this.getPostComments(id)


    ).catch(err => console.error(err))
  }
  // getComments() {
  //   api.get('/comments').then(res => {
  //     ProxyState.comments = res.data.map(c => new Comment(c))
  //   }).catch(err => console.error(err))
  // }

  getPostComments(id) {

    console.log(id)
    api.get('/posts/' + id + '/comments').then(res => {
      ProxyState.comments = res.data.map(c => new Comment(c))

    }).catch(err => console.error(err))
  }

}

export const commentsService = new CommentsService()