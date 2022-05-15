const router = require('express').Router();
const NotFoundError = require('../errors/not-found');

router.use(require('./telephone'));

router.use((req, res, next) => {
  next(new NotFoundError("Запрос не найден"));
});

module.exports = router;
