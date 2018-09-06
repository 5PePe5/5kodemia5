const express = require ('express');
const cors = require('cors');
const app = express();
const {mongosee} = require ('./database')

app.set('port', process.env.PORT || 3000)

app.use(cors());
app.use(express.json());

app.use('/usuarios',require('./routes/usuarios.routes'));


//iniciamos el servidor pedimos el 'port'

app.listen(app.get('port'), () => {
 console.log( `conexion exitosa al puerto  ${app.get('port')}`);


});