import { Request, Response } from "express";
import { GetLastMessagesService } from "../services/GetLastMessagesService";

class GetLastMessagesController {
  async handle(req: Request, resp: Response) {
    const service = new GetLastMessagesService();
    const result = await service.execute();

    return resp.json(result);
  }
}

export { GetLastMessagesController };
