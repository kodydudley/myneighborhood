
export default class Comment {
  constructor(data) {
    this.commentId = data.commentId
    this.creatorId = data.creator
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
    
    <div class="col-4">
    <button class="btn bg-transparent border-0">
    X
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