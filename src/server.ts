import 'dotenv/config';
import express, { json } from 'express';

import { setupMongo } from './database';
import { routes } from './routes';

setupMongo().then(() => {
	const app = express();

	app.use(json());
	app.use(routes);

	app.listen(3333, () => console.log('🚀 App esta rodando na porta 3333!'));
});
