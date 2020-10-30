import express from "express";
import BaseController from "../utils/BaseController";
import {
  accountsService
} from "../services/AccountsService";
import {
  Auth0Provider
} from "@bcwdev/auth0provider";


export class AccountsController extends BaseController {
  constructor() {
    super("api/accounts");
    this.router
      .get("", this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post("", this.create)
      .delete("/:accountId", this.delete)
      .put("/:accountId", this.edit)
  }
  async edit(req, res, next) {
    try {
      res.send(await accountsService.edit(req.params.accountId, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await accountsService.delete(req.params.accountId))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async getMyAccounts(req, res, next) {
    try {
      return res.send(await accountsService.getMyAccounts(req.userInfo.userId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}