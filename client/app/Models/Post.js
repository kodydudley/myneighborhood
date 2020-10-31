import { ProxyState } from "../AppState.js"

export default class Post {
  constructor(data) {
    this.postId = data._id
    this.creatorId = data.creatorId
    this.caption = data.caption
    this.imgUrl = data.imgUrl
    this.comments = []
    this.posts = 0
  }
  get Template() {
    return /*html*/ `
    <div class="row">
    <div class="col-2"></div>
    <div class="col-8 radius-25 m-5 shadow-lg">

        <button class="btn btn-danger close"
            onclick="app.postsController.deletePost('${this.postId}')">x</button>

        <img class="img-fluid" src="${this.imgUrl}" alt="">
        <h3>${this.caption}</h3>
        <button class="bg-transparent text-dark border-dark radius-25 p-2" type="button" data-toggle="collapse"
            data-target="#content-${this.postId}" aria-expanded="false" aria-controls="contentId">
            Add comment
        </button>

        <div class="collapse" id="content-${this.postId}">

            <form class="py-3" onsubmit="app.commentsController.addComment(event, '${this.postId}')">
                <div class="form-group">

                    <input type="text" name="content" id="" class="radius-25 border-dark p-2 "
                        placeholder="Add a comment" aria-describedby="helpId">

                    <button type="submit" class="btn btn-primary radius-25">+</button>
                </div>
            </form>

            <div class="row" id="comments${this.postId}">
                ${this.Comments}
            </div>
        </div>
    </div>

    <div class="col-2"></div>
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