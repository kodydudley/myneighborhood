
export default class Profile {
  constructor(data) {
    this._id = data._id
    this.name = data.name
    this.bio = data.bio
    this.imgUrl = data.imgUrl
    this.favorites = []
    this.posts = []
  }

}