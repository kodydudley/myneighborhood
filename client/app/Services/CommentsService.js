import { ProxyState } from "../AppState.js"
import Comment from "../Models/Comment.js"
import { api } from "./AxiosService.js";

class CommentsService {

  constructor() {
    console.log("hellow from Comment Service");
    this.getComments()
  }

  addComment(newComment) {
    api.post("/comments", newComment).then(res =>
      this.getComments()

    ).catch(err => console.error(err))

    // let temp = ProxyState.feed
    // temp.unshift(new Post(newPost))
    // ProxyState.feed = temp
  }
  getComments() {
    api.get('/comments').then(res => {
      ProxyState.comments = res.data.map(c => new Comment(c))
    }).catch(err => console.error(err))
  }

}

export const commentsService = new CommentsService()