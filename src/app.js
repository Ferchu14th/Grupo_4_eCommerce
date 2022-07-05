const express = require('express');
const app = express();
const path = require('path');

const indexRoutes = require('./routes/indexRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');

const PORT = process.env.PORT || 3050;

//setea el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));


//configuración de public static
app.use(express.static('public'));


/******Nuevas Rutas a través de Routes y Controllers INDEX o ENTRY POINT*****/
app.use('/', indexRoutes);

/******Nuevas Rutas a través de Routes y Controllers PRODUCTOS******/
app.use('/products', productsRoutes);

/******Nuevas Rutas a través de Routes y Controllers USUARIOS******/
app.use('/users', usersRoutes)

/******este es el Listen que siempre dejamos al final**************/
app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});