import path from 'path'
import dotenv from 'dotenv'

dotenv.config({
    path: `./environments/.env.${process.env.NODE_ENV}`
});

export default {
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    PORT: process.env.PORT
}