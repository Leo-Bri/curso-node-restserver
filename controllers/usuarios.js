const { response } = require('express');



const usuariosGet = (req = request, res= response) => {
    
    const { q, nombre, apikey, page=1 } = req.query;
    
    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        apikey,
        page
    });
};

const usuariosPost = (req, res= response) => {
    
    const body = req.body;
    
    res.json({
        msg: 'Post API - Controlador',
        body
    });
};

const usuariosPut = (req, res= response) => {
    
    //const id = req.params.id;
    const {id} = req.params;
    
    res.json({
        msg: 'Put API - Controlador',
        id
    });
};

const usuariosPatch = (req, res= response) => {
    res.json({
        msg: 'Patch API - Controlador'
    });
};

const usuariosDelete = (req, res= response) => {
    res.json({
        msg: 'Delete API - Controlador'
    });
};






module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}