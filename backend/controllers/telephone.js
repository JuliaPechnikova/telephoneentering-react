const Telephone = require('../models/telephone');

const BadRequestError = require('../errors/unathorized');
const ConflictError = require('../errors/conflict');

module.exports.createTelephone = (req, res, next) => {
  const { value } = req.body;

  Telephone.create({ value })
    .then((telephone) => res.status(200).send(telephone))
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'Bad Request') {
        next(new BadRequestError("Переданы некорретные данные при добавлении номера"));
      } else if (err.code === 11000) {
        next(new ConflictError("Данный номер уже имеется в базе"));
      } else {
        next(err);
      }
    });
};

module.exports.getTelephones = (req, res, next) => {
  Telephone.find({})
    .then((telephone) => res.status(200).send(telephone))
    .catch(next);
};