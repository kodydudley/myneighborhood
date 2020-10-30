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
      .use(Auth0Provider.getAuthorizedUserInfo)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post("", this.create)
      .delete("/:commentId", this.delete)
      .put("/:commentId", this.edit)
  }
  async edit(req, res, next) {
    try {
      res.send(await commentsService.edit(req.params.commentId, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await commentsService.delete(req.params.commentId))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      return res.send(await commentsService.getAll());
    } catch (error) {
      next(error);
    }
  }

  async getMycomments(req, res, next) {
    try {
      return res.send(await commentsService.getMycomments(req.userinfo.userId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.Id;
      req.body.creatorEmail = req.userInfo.email;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}