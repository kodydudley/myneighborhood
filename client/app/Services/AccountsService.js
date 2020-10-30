import { ProxyState } from "../AppState.js"
import Account from "../Models/Account.js"

class AccountsService {
  constructor() {
    console.log("hellow from Account Service");
  }
}

export const accountsService = new AccountsService()