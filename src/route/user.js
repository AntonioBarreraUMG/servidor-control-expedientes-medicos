const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const { protectRoute } = require('../security/jsonwebtoken');

// Ruta para iniciar sesión
router.post("/login", user.loginUser);
// Ruta para registrar un usuario
router.post("/register", user.createUser);
// Proteger las rutas que vienen después
router.use(protectRoute);
// Ruta para obtener un usuario por su ID
router.get("/:id?", user.getUserById);

module.exports = router;
