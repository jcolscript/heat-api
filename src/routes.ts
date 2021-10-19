import { Router, Request, Response } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.get("/github", (req: Request, resp: Response) => {
  resp.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

router.get("/signin/callback", (req: Request, resp: Response) => {
  const { code } = req.query;
  return resp.json(code);
});

router.post("/auth", new AuthenticateUserController().handle);
router.post(
  "/message",
  ensureAuthenticated,
  new CreateMessageController().handle
);

export { router };
