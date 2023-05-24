import { Request, Response, Router } from 'express';
import { upload } from '../../middleware/upload';

import dotenv from 'dotenv';
dotenv.config();

import { v2 as cloudinary } from 'cloudinary';

const app: Router = Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: '/api/V1 is running successfully!',
  });
});

app.post(
  '/upload',
  upload.single('file'),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) throw 'No File not found!';
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'images',
      });
      console.log(`File uploaded successfully! ${result.url}`);
      res.status(200).json({
        status: 200,
        message: 'File uploaded successfully!',
        data: result,
      });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }
);

export const routerV1 = app;
