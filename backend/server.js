// backend/server.js

import express, { json } from 'express';
import cors from 'cors';
import router from './routes/dataRoute.js';
import mongoClient from './connection/mongoConnect.js';

const app = express();
app.use(cors());
app.use(json());

// mongo connection
mongoClient;

app.use('/api/data', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
