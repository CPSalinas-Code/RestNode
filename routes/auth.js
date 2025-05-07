const {Router} = require('express');
const {check} = require('express-validator');
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validator');

const router = Router();

//('path',middlewares,controlador)

router.post('/login',
    [
    check('correo','El correo es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('password','La contrasena es obligatoria').not().isEmpty(),
    validarCampos
    ]
    ,login);

module.exports = router;
