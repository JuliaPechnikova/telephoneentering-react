require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const { errors } = require('celebrate');

const errorProcess = require('./middlewares/error-process');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes/index');

const limiter = require('./utils/rate-limiter');

const { MONGO_ADDR } = require('./utils/config');

const { PORT = 3001, MONGO_DB, NODE_ENV } = process.env;
const app = express();

app.use(requestLogger);
app.use(helmet());
app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(NODE_ENV === 'production' ? MONGO_DB : MONGO_ADDR);

app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(errorProcess);

app.listen(PORT, () => {
});
