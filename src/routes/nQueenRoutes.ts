import { Router, Request, Response } from "express";
import NQueenController from '../controllers/nQueenController';

const router = Router();

router.get("/n-queen/:n", (req: Request, res: Response) => {
  console.log("chegou aqui")
  const nQueenController = new NQueenController();
  const solutions = nQueenController.solve(req, res);
  res.json({ solutions });
});

export default router;
