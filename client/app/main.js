import AccountsController from "./Controllers/AccountsController.js";
import { AuthController } from "./Controllers/AuthController.js";
import CommentsController from "./Controllers/CommentsController.js";
import PostsController from "./Controllers/PostsController.js";
import ValuesController from "./Controllers/ValuesController.js";


class App {
  accountsController = new AccountsController();
  commentsController = new CommentsController();
  postsController = new PostsController();

  authController = new AuthController();
  valuesController = new ValuesController();
}

window["app"] = new App();
