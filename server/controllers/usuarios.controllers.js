const Usuarios = require('../models/usuario');

const usuariosCtrl = {};

usuariosCtrl.getUsuarios = async (req, res, next) => {
    const usuario = await Usuarios.find();
    res.json(usuario);
};

usuariosCtrl.createUsuario = async (req, res, next) => {
    const usuario = new Usuarios({
        id: req.body.id,
        idempleado: req.body.idempleado,
        isActive: req.body.isActive,
        age: req.body.age,
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    await usuario.save();
    res.json({status: 'Usuario created'});
};

usuariosCtrl.getUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuarios.findById(id);
    res.json(usuario);
};

usuariosCtrl.editUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = {
        id: req.body.id,
        idempleado: req.body.idempleado,
        isActive: req.body.isActive,
        age: req.body.age,
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
        
    };
    await Usuarios.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario Updated'});
};

usuariosCtrl.deleteUsuario = async (req, res, next) => {
    await Usuarios.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Deleted'});
};

module.exports = usuariosCtrl;