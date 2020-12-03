import express, { response } from 'express';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanage from './models/Orphanage';
import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);
  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  console.log('================= ' + request.body.longitude);
  await orphanagesRepository.save(orphanage);

  return response.status(200).json({ message: 'FUNFOU' });
});

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333);
