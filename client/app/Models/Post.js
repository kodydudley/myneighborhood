import { ProxyState } from "../AppState.js"

export default class Post {
  constructor(data) {
    this.postId = data._id
    this.creatorId = data.creatorId
    this.caption = data.caption
    this.imgUrl = data.imgUrl

    this.likes = 0
  }
  get Template() {
    return /*html*/ `
    <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
<div class="radius-25 my-3 shadow-lg p-3">
        <button class="btn btn-danger close"
            onclick="app.postsController.deletePost('${this.postId}')">x</button>

        <img class="img-fluid radius-25 shadow" src="${this.imgUrl}" alt="">
        <h3>${this.caption}</h3>
        <button class="bg-transparent text-dark border-0 radius-25 p-2" type="button" data-toggle="collapse"
            data-target="#content-${this.postId}" aria-expanded="false" aria-controls="contentId">
            <i class="fas fa-comments fa-2x"></i>
        </button>

        <div class="collapse" id="content-${this.postId}">

            <form class="py-3" onsubmit="app.commentsController.addComment(event, '${this.postId}')">
                <div class="form-group">

                    <input type="text" name="content" id="" class="radius-25 border-dark p-2 "
                        placeholder="Add a comment" aria-describedby="helpId" required>

                    <button type="submit" class="btn bg-transparent text-dark radius-25"><i class="fas fa-plus-circle fa-2x"></i></button>
                </div>
            </form>

            
        </div>
        <div class="row">
        <div class="col-12">
        ${this.Comments}
        </div>
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