import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import env from './utils/config.js';
import routes from './routes/routes.js'

const app = express();

app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', routes);

app.listen(env.PORT, () => {
    console.log(`Servidor operando en el puerto ${env.PORT}`);
});