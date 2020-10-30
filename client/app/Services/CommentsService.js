import { ProxyState } from "../AppState.js"
import Comment from "../Models/Comment.js"

class CommentsService {
  constructor() {
    console.log("hellow from Comment Service");
  }
}

export const commentsService = new CommentsService()