const Task = require("../../model/taskModel");

const createTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  try {
    const task = await Task.query().insert({
      title,
      description,
      user_id: userId,
    });

    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const listTask = async (req, res) => {
  const userId = req.user.id;

  try {
    const task = await Task.query()
      .where("user_id", "=", userId)
      .orderBy("id", "desc");

    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, description, completed } = req.body;

  try {
    let task = await Task.query().findById(taskId);

    if (!task) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    if (task.user_id !== req.user.id) {
      return res.status(403).json({ error: "Acesso não autorizado." });
    }

    task = await Task.query().patchAndFetchById(taskId, {
      title,
      description,
      completed,
    });

    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.query().findById(taskId);

    if (!task) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    if (task.user_id !== req.user.id) {
      return res.status(403).json({ error: "Acesso não autorizado." });
    }

    await Task.query().deleteById(taskId);

    res.json({ message: "Tarefa excluída com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTask,
  listTask,
  updateTask,
  deleteTask,
};
