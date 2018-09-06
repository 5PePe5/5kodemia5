const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    id: { type: String, required: true},
    age: { type: Number, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: Number, required: true},
    address: { type: String, required: true}
});

module.exports = mongoose.model('usuarios', usuarioSchema);
