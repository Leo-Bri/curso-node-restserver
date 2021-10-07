
const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');

const router = Router();


/*router.get('/', (req, res) => {
    //res.send('Hello World')
    //res.status(403).json({
    res.json({
        msg: 'get API'
    });
});

router.put('/', (req, res) => {
    res.json({
        msg: 'put API'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'post API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});
*/

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);




module.exports = router;