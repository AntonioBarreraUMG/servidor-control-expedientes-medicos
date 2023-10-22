const jwt = require("../security/jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

exports.createUser = async function(req, res) {
  try {
    const userPayload = req.body;
    userPayload.password = await bcrypt.hash(req.body.password, 10);
    await (new User(userPayload)).save();

    res.status(201).json({ message: "Creación exitosa" });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

exports.loginUser = async function(req, res) {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!user || !isPasswordValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.createToken(user);
    res.status(200).json({ message: "Inicio de sesion exitoso", token });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

exports.getUserById = async function(req, res) {
  let userId = req.params.id;
  if (!userId) {
    userId = req.user.id
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "El usuario no existe" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
