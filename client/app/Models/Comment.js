
export default class Comment {
  constructor(data) {
    this.commentId = data._id
    this.creatorId = data.creator.name
    this.postId = data.postId
    this.content = data.content

  }
  get Template() {
    return /*html*/`
    <div class="row">
    <div class="col-8">
    <h5>
    ${this.creatorId}
    </h5>
    </div>
    
    <div class="col-4 d-flex justify-content-end">
    <button class="btn bg-transparent border-0" onclick="app.commentsController.delete('${this.commentId}')">
    x
    </button>
    </div>
    
    </div>

    <div class="row">

    <div class="col-12">
    <p>${this.content}</p>
    </div>

    </div>
    `
  }
}