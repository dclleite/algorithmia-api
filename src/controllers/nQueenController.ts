import { Request, Response } from 'express';
import NQueensSolver from '../models/nQueenSolver';

class NQueenController {
  public async solve(req: Request, res: Response) {
    try {
      const n = parseInt(req.params.n as string);
      if (isNaN(n) || n < 1) {
        res.status(400).send({ message: 'Invalid input. N must be a positive integer.' });
        return;
      }
      const solver = new NQueensSolver(n);
      return res.send({ solution: solver.solve() });
    } catch (err) {
      return res.status(500).send({ error: 'Internal server error' });
    }
  }
}

export default NQueenController;
