import {
  Auth0Provider
} from "@bcwdev/auth0provider";
import {
  profilesService
} from "../services/ProfilesService";
import BaseController from "../utils/BaseController";

export class ProfilesController extends BaseController {
  constructor() {
    super("api/profile");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserProfile)
  }
  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
}

// export class ProfilesController extends BaseController {
//   constructor() {
//     super("api/profiles");
//     this.router
//       .get("", this.getAll)
//       .use(Auth0Provider.getAuthorizedUserInfo)
//       // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
//       .post("", this.create)
//       .delete("/:profileId", this.delete)
//       .put("/:profileId", this.edit)
//   }
//   async edit(req, res, next) {
//     try {
//       res.send(await profilesService.edit(req.params.profileId, req.body))
//     } catch (error) {
//       next(error)
//     }
//   }

//   async delete(req, res, next) {
//     try {
//       res.send(await profilesService.delete(req.params.profileId))
//     } catch (error) {
//       next(error)
//     }
//   }
//   async getAll(req, res, next) {
//     try {
//       return res.send();
//     } catch (error) {
//       next(error);
//     }
//   }

//   async getMyProfiles(req, res, next) {
//     try {
//       return res.send(await profilesService.getMyProfiles(req.userInfo.userId));
//     } catch (error) {
//       next(error);
//     }
//   }
//   async create(req, res, next) {
//     try {
//       // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
//       req.body.creatorId = req.userInfo.Id;

//       req.body.creatorEmail = req.userInfo.email;
//       res.send(req.body);
//     } catch (error) {
//       next(error);
//     }
//   }
// }