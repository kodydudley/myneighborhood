import Account from "./Models/Account.js"
import Comment from "./Models/Comment.js"
import Post from "./Models/Post.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Post[]} */
  feed = []
  user = {}
  profile = {}
  /** @type {Account[]} */
  accounts = []
  /** @type {Value[]} */
  values = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
