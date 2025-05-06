const {Router} = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuarioDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/',usuariosGet);
router.post('/', usuariosPost);
router.delete('/', usuarioDelete);
router.put('/:id', usuariosPut);

module.exports = router; 