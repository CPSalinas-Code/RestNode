const validarCampos = require('../middlewares/validator');
const validateJwt = require('../middlewares/validate-jwt');
const validateRole = require('../middlewares/validateRole');

module.exports = {
    ...validarCampos,
    ...validateJwt,
    ...validateRole
}