import express from 'express';
import { db } from './db';
import { userRoutes } from './routes/user.routes';
import { atividadesRoutes } from './routes/atividades.routes';
const cors = require('./routes/middlewares/cors');

const app = express();

app.use(express.json());

app.use(cors);
app.use(userRoutes);
app.use(atividadesRoutes);

app.listen(3001, async () => {
  await db.sync();
  console.log('App running at 3001!');
});
