import { Router, Request, Response } from "express";
import SudokuController from '../controllers/sudokuController';

const router = Router();

router.get("/sudoku", (req: Request, res: Response) => {
  const controller = new SudokuController();
  const solution = controller.solve(req, res);

  res.json({ solution });
});

export default router;
