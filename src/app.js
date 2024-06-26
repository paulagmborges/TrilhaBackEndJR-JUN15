const express = require ("express");
const app = express();
const knex = require('knex');
const knexConfig = require('../knexfile');

app.use(express.json())
const db = knex(knexConfig.development)
// Rota para cadastrar um novo usuário
app.post('/user', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Inserir usuário no banco de dados usando o Knex
    const [userId] = await db('user').insert({ name, email, password });

    res.status(201).json({ id: userId, name, email });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Connected to port 3000");
});