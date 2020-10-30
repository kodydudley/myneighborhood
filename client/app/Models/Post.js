
export default class Post {
  constructor(data) {
    this.postId = data.postId
    this.creatorId = data.creatorId
    this.captionId = data.captionId
    this.imgUrl = data.imgUrl
    this.comments = []
    this.posts = 0
  }
  get Template() {
    return
  }
}