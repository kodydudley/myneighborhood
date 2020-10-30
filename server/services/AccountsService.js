import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";
import Account from "../models/Account"


class AccountsService {
  async edit(accountId, body) {
    return await dbContext.Accounts.findByIdAndUpdate(accountId, body)
  }
  async getMyaccounts(userId) {
    return await dbContext.Accounts.find({
      creatorId: userId
    })
  }
  async delete(accountId) {
    let exists = await dbContext.Accounts.findById(accountId)
    if (!exists) {
      throw new BadRequest("This account does not exist!")
    }
    await dbContext.Accounts.findByIdAndDelete(accountId)
    return "Your account has been deleted!"
  }
  async getAll(query = {}) {
    return await dbContext.Accounts.find(query);
  }
}

export const accountsService = new AccountsService();