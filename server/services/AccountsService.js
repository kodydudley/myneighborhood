import {
  dbContext
} from "../db/DbContext";
import {
  BadRequest
} from "../utils/Errors";

class AccountsService {
  async find(query = {}) {
    let accounts = await dbContext.Accounts.find(query);
    return accounts;
  }
  async findById(id) {
    let account = await dbContext.Accounts.findById(id);
    if (!account) {
      throw new BadRequest("Invalid Id");
    }
    return account;
  }
}

export const accountsService = new AccountsService();