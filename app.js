const express = require('express');
const usersRoute = require('./usersRoute.js');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/usuarios", usersRoute);

app.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido al servidor de usuarios</h1>
        <form action="/usuarios" method="post">
            <h2>Agregar Usuario</h2>
            <label for="nombre">Nombre: </label>
            <input type="text" id="nombre" name="nombre" required>
            <label for="edad">Edad: </label>
            <input type="text" id="edad" name="edad" required>
            <label for="pais">Lugar de Procedencia: </label>
            <input type="text" id="pais" name="pais" required>
            <button type="submit">Agregar</button>
        </form>
        <form action="/usuarios/delete/" method="DELETE">
            <h2>Eliminar Usuario</h2>
            <label for="nombre">Nombre: </label>
            <input type="text" id="nombre" name="nombre" required>
            <button type="submit">Eliminar</button>
        </form>
        <a href="/usuarios">Usuarios</a>
  `);
});



app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto 3001');
});
