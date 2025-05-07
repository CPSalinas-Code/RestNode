const {Router} = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuarioDelete } = require('../controllers/usuarios');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validator');
const { esRolValido, emailExiste } = require('../helpers/dbValidators');

const router = Router();

router.get('/',usuariosGet);
router.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio y mas de 6 caracteres').isLength({min:6}),
    check('correo','Correo no valido').isEmail(),
    check('correo').custom(emailExiste),
    // check('rol','No es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRolValido),
    validarCampos
],usuariosPost);
router.delete('/', usuarioDelete);
router.put('/:id', usuariosPut);

module.exports = router; 