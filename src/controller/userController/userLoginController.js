const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../model/userModel");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ messagem: "È obrigatório email e senha" });
  }

  try {
    const user = await User.query().where("email", email).first();
    if (!user) {
      return res.status(400).json({ message: "O usuário não foi encontrado" });
    }
    const corretPassword = await bcrypt.compare(password, user.password);
    if (!corretPassword) {
      return res.status(400).json({ message: "Email e senha não conefre" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      user: user,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginUser;
