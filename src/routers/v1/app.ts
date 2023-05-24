import { Request, Response, Router } from 'express';
import { upload } from '../../middleware/upload';

const app: Router = Router();

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: '/api/V1 is running successfully!',
  });
});

app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    status: 200,
    message: 'upload',
  });
});

export const routerV1 = app;
