import { ProxyState } from "../AppState.js"
import Comment from "../Models/Comment.js"
import { api } from "./AxiosService.js";

class CommentsService {
  delete(id) {
    api.delete('/comments/' + id).then(res => {
      this.getComments()
    }).catch(err => console.error(err))
  }

  constructor() {
    console.log("hellow from Comment Service");
    this.getComments()
  }

  addComment(newComment) {
    api.post("/comments", newComment).then(res =>
      this.getComments()

    ).catch(err => console.error(err))


  }
  getComments() {
    api.get('/comments').then(res => {
      ProxyState.comments = res.data.map(c => new Comment(c))
    }).catch(err => console.error(err))
  }

}

export const commentsService = new CommentsService()