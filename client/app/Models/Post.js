
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
    </div>
    </div>
    `
  }
}