import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import env from './utils/config.js';

const app = express();

app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', contactRoutes);

app.listen(env.PORT, () => {
    console.log(`Servidor operando en el puerto ${env.PORT}`);
});