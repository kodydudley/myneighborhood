import express from "express";
import BaseController from "../utils/BaseController";
import {
  postsService
} from "../services/PostsService";
import {
  Auth0Provider
} from "@bcwdev/auth0provider";


export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post("", this.create)
      .delete("/:postId", this.delete)
      .put("/:postId", this.edit)
      .get("/:userId", this.getMyPosts)
  }
  async edit(req, res, next) {
    try {
      res.send(await postsService.edit(req.params.postId, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await postsService.delete(req.params.postId))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      return res.send(await postsService.getAll());
    } catch (error) {
      next(error);
    }
  }

  async getMyPosts(req, res, next) {
    try {
      return res.send(await postsService.getMyPosts(req.params.userId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id;
      req.body.creatorEmail = req.userInfo.email;
      res.send(await postsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}