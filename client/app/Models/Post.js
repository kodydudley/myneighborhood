import { ProxyState } from "../AppState.js"

export default class Post {
  constructor(data) {
    this.postId = data.postId
    this.creatorId = data.creatorId
    this.caption = data.caption
    this.imgUrl = data.imgUrl
    this.comments = []
    this.posts = 0
  }
  get Template() {
    return /*html*/ `
    <div class="col-12">
    <div class="row m-3 shadow-lg">
      <img class="img-fluid" src="${this.imgUrl}" alt=""/>
      <h3>${this.caption}</h3>
      <form onsubmit="app.commentsController.addComment(event)">
      <div class="form-group">
      
      <input type="text" name="content" id="" class="form-control" placeholder="Add a comment" aria-describedby="helpId">
      
      <button type="submit" class="btn btn-primary">Add Comment</button>
      </div>
      </form>
      <div class="col-12" id="comments${this.postId}">
${this.Comments}
      </div>
    </div>
    </div>
    `
  }

  get Comments() {
    let template = ''
    let comments = ProxyState.comments.filter(c => c.postId == this.postId)
    comments.forEach(c => template += c.Template)
    return template
  }
}