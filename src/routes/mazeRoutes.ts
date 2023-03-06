import { Router, Request, Response } from "express";
import MazeController from '../controllers/mazeController';

const router = Router();
const controller = new MazeController();

router.get("/maze", controller.solve);

export default router;
