const express = require('express');
const router = express.Router();

const users = require('./users.js').default;

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const user = users.find(user => user.nombre === nombre);
    console.log("BUSCAR")
    if (user) {
        res.send(user);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

router.post('/', (req, res) => {
    console.log("AGREGAR")
    const newUser = {
        id: users.length + 1,
        nombre: req.body.nombre,
        edad: req.body.edad,
        lugarProcedencia: req.body.pais,
      };
      users.push(newUser);
      res.redirect('/');
});

router.delete('/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const user = users.find(user => user.nombre === nombre);
    console.log("ELIMINAR")
    if (user) {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.send(users);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

router.put('/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const user = users.find(user => user.nombre === nombre);
    console.log("EDITAR")
    if (user) {
        user.edad = req.body.edad;
        user.lugarProcedencia = req.body.pais;
        res.send(user);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});


module.exports = router;