import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nQueenRoutes from './routes/nQueenRoutes';
import sudokuRoutes from './routes/sudokuRoutes';
import mazeRoutes from './routes/mazeRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use('/api', nQueenRoutes);
    this.app.use('/api', sudokuRoutes);
    this.app.use('/api', mazeRoutes);
  }
}

export default new App().app;

