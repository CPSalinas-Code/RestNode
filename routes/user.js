const {Router} = require('express');
const { usuariosGet, usuariosPost } = require('../controllers/usuarios');

const router = Router();

router.get('',usuariosGet);
router.post('', usuariosPost);
router.delete('', (req,res)=>{
    res.json({
        status: 'OK',
        name: 'delete Christian'
    })
});
router.put('', (req,res)=>{
    res.json({
        status: 'OK',
        name: 'put Christian'
    })
});

module.exports = router;