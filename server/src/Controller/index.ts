import { Router } from "express";
import { HomeRouter } from "./HomeController.js";

const router: Router = Router();

router.use("/", HomeRouter);

export const MainRouter: Router = router;