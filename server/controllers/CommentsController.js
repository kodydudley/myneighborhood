import express from "express";
import BaseController from "../utils/BaseController";
import {
  commentsService
} from "../services/CommentsService";
import {
  Auth0Provider
} from "@bcwdev/auth0provider";

export class CommentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      return res.send();
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