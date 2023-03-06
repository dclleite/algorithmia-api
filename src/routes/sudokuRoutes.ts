import { Router, Request, Response } from "express";
import SudokuController from '../controllers/sudokuController';

const router = Router();
const controller = new SudokuController();

router.get("/sudoku", controller.solve);

export default router;
