const router = require('express').Router();
const { createTelephoneValidation } = require('../middlewares/telephoneValidation');

const {
  createTelephone,
  getTelephones,
} = require('../controllers/telephone');

router.get('/telephone', getTelephones);
router.post('/telephone', createTelephoneValidation, createTelephone);

module.exports = router;
