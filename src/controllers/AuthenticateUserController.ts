import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(req: Request, resp: Response) {
    const { code } = req.body;

    const service = new AuthenticateUserService();

    try {
      const result = await service.execute(code);

      return resp.json(result);
    } catch (error) {
      return resp.json(error.message);
    }
  }
}

export { AuthenticateUserController };
