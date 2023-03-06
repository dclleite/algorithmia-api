import { Request, Response } from 'express';
import NQueensSolver from '../models/nQueenSolver';

class NQueenController {
  public async solve(req: Request, res: Response): Promise<void> {
    const n = parseInt(req.params.n as string);

    if (isNaN(n) || n < 1) {
      res.status(400).send({ message: 'Invalid input. N must be a positive integer.' });
      return;
    }

    const solver = new NQueensSolver(n);
    const solution = solver.solve();

    res.send(solution);
  }
}

export default NQueenController;
