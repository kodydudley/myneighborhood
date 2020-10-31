import { ProxyState } from "../AppState.js"

export default class Post {
  constructor(data) {
    this.postId = data._id
    this.name = data.creatorId.name
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
<div class="radius-25 my-3 shadow-lg px-3 d-flex flex-column justify-content-center">
<div>${this.name}</div>
<div class="d-flex justify-content-end">
<button class="btn bg-transparent text-danger"
onclick="app.postsController.deletePost('${this.postId}')">
<i class="fas fa-times-circle"></i>
</button>
</div>

        <img class="img-fluid radius-25 shadow" src="${this.imgUrl}" alt="">
        <h3 class="my-2">${this.caption}</h3>
        <div class="d-flex">
        <button class="bg-transparent text-dark border-0 radius-25 p-2" type="button" data-toggle="collapse"
        data-target="#content-${this.postId}" aria-expanded="false" aria-controls="contentId" onclick="app.commentsController.getPostComments('${this.postId}')">
        <i class="fas fa-comments fa-2x"></i>
        </button>
<button class="bg-transparent text-dark border-0">
<i class="far fa-heart fa-2x ml-1"></i>
</button>
<button class="bg-transparent text-dark border-0">
<i class="fas fa-bookmark fa-2x ml-1"></i>
</button>
        </div>

        
        <div class="row">
          <div class="col-12">
         ${this.Comments}
        </div>
        <div class="col-12">
        
        <div class="" id="content-${this.postId}">
        <form class="py-3" onsubmit="app.commentsController.addComment(event, '${this.postId}')">

        <div class="d-flex">
        <input type="text" name="content" id="" class="radius-25 border-0 shadow p-2 w-100"
        placeholder="Add a comment" aria-describedby="helpId" required>
        
        <button type="submit" class="btn bg-transparent text-dark"><i class="fas fa-plus-circle fa-2x"></i></button>

        </form>
        </div>
        </div>
            
        
        
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