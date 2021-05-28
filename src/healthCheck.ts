import { Router } from "express";

const healthCheckRouter = Router();

healthCheckRouter.get("/healthcheck", (_, res) => {
  res.sendStatus(204);
});

export { healthCheckRouter };
