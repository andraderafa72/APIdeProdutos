/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import { router } from './routes';

export const app = express();

app.use(router);
