import { ProxyState } from "../AppState.js"
import Comment from '../Models/Comment.js'
export default class Post {
  constructor(data) {
    this.postId = data._id
    this.creatorId = data.creatorId
    this.caption = data.caption
    this.imgUrl = data.imgUrl
    this.comments = []
    this.likes = 0
  }
  get Template() {
    return /*html*/ `
    <div class="col-2"></div>
    <div class="col-8">
    

    <div class="row m-3 shadow-lg p-3 radius-25">
    <div class="col-12 text-center">
    <button class="btn btn-danger close" onclick="app.postsController.deletePost('${this.postId}')">x</button>
    
    <img class="img-fluid" src="${this.imgUrl}" alt=""/>
    <h3>${this.caption}</h3>
    <form onsubmit="app.commentsController.addComment(event, '${this.postId}')">
    <div class="form-group">
    
    <input type="text" name="content" id="" class="radius-25 border-dark p-2 " placeholder="Add a comment" aria-describedby="helpId">
    
    <button type="submit" class="btn btn-primary radius-25">+</button>
    </div>
    </form>
    <div class="col-12" id="comments${this.postId}">
    ${this.Comments}
    </div>
    </div>
    </div>
    </div>
    <div class="col-2"></div>

    `
  }

  get Comments() {
    let template = ''
    let comments = ProxyState.comments.filter(c => c.postId == this.postId)
    comments.forEach(c => template += c.CommentTemplate)
    return template
  }
}