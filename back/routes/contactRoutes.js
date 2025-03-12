import express from 'express';
import { sendMail } from '../controllers/contactController.js';
import { contactValidator } from '../middlewares/contactValidator.js';

const router = express.Router();

router.post('/contacto', contactValidator, sendMail);

export default router;