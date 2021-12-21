/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './routes';

export const app = express();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'Content-Type',
    'Accept',
    'authorization',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
};

app.use(helmet());
app.use(cors(options));
app.options('*', cors(options));

app.use(express.json());
app.use(router);

app.use((req, res) => res.json({ status: 'ativo' }));
