import express from 'express';
import { sendMail } from '../controllers/contactController.js';
import { contactValidator } from '../middlewares/contactValidator.js';
import { getImages } from '../controllers/imageController.js';

const router = express.Router();

router.post('/contacto', contactValidator, sendMail);
router.get('/getImages', getImages);

export default router;