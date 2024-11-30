/* eslint-disable node/global-require */
import { initDB } from './db/initDB';
import { errors } from 'celebrate';
import { errorHandler } from './errorHandler';
import express = require('express');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const app = express();

initDB()
	.then(() => {
		const posts = require('./routes/posts/index');
		const users = require('./routes/users/index');
		if (process.env.MODE === 'PRODUCTION') {
			// обслуживаем созданное приложение статически
			app.use(express.static(path.join(__dirname, '../client/build')));
		}
		app.use(cookieParser());
		app.use(bodyParser.json());
		app.use(posts);
		app.use(users);
		if (process.env.MODE === 'PRODUCTION') {
			// обслуживаем файл index.html для любого запроса, если это не запрос API
			app.get('/*', function (req, res) {
				res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
			});
		}
		app.use(errors());
		app.use(errorHandler);
		app.listen(process.env.PORT, () =>
			console.log('listening on %d', process.env.PORT)
		);
	})
	.catch((error) => {
		console.error(error);
	});

export { app };
