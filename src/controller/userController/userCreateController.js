const bcrypt = require("bcryptjs");
const User = require("../../model/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.query().where("email", email).first();

    if (existingUser) {
      return res.status(400).json({ message: "Email já está em uso." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.query().insert({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    res.status(500).json({ message: "Erro interno ao registrar usuário." });
  }
};

module.exports = registerUser;
