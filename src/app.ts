import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Not Found
app.use(notFound);

export default app;
