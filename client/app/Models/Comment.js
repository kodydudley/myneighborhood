
export default class Comment {
  constructor(data) {
    this.commentId = data.commentId
    this.creatorId = data.creatorId
    this.postId = data.postId
    this.content = data.content

  }
  get Template() {
    return
  }
}