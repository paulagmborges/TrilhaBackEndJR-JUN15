const bcrypt = require("bcryptjs");
const User = require("../../model/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Send all data" });
    }
    const existingUser = await User.query().where("email", email).first();

    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hasPassword = await bcrypt.hash(password, 10);

    const newUser = await User.query().insert({
      name,
      email,
      password: hasPassword,
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = registerUser;
