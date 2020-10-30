import express from "express";
import BaseController from "../utils/BaseController";
import {
  postsService
} from "../services/PostsService";
import {
  Auth0Provider
} from "@bcwdev/auth0provider";

// constructor(data) {
//   this.postId = data.postId
//   this.creatorId = data.creatorId
//   this.captionId = data.captionId
//   this.imgUrl = data.imgUrl
//   this.comments = []
//   this.posts = 0
// }

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post("", this.create)
      .delete("/:postId", this.delete)
      .put("/:postId", this.edit)
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
      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async getMyPosts(req, res, next) {
    try {
      return res.send(await postsService.getMyPosts(userId));
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