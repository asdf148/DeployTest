import * as multer from 'multer';
import { join } from 'path';

export const multerOption = {
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, join(__dirname, '../src/public/'));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}__${file.originalname}`);
    },
  }),
};
