import { Router, Request, Response } from "express";
import NQueenController from '../controllers/nQueenController';

const router = Router();
const nQueenController = new NQueenController();

router.get("/n-queen/:n", nQueenController.solve);

export default router;
