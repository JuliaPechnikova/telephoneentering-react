const { celebrate, Joi } = require('celebrate');

module.exports.createTelephoneValidation = celebrate({
  body: Joi.object().keys({
    value: Joi.string().min(4).max(11).pattern(/^[0-9]+$/).required(true).messages({'string.pattern.base': `Phone number must have from 4 to 10 digits.`})
  }),
});
