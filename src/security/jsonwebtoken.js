const jwt = require("jsonwebtoken");

function createToken(user) {
  const data = {
    id: user._id,
    email: user.email,
    username: user.username,
  };
  return jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
};

function validateToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return null;
  }
};

function protectRoute(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }
  const decoded = validateToken(token);
  if (!decoded) {
    return res.status(401).json({ message: "Token inválido" });
  }
  req.user = decoded;
  next();
};

module.exports = { createToken, validateToken, protectRoute };
