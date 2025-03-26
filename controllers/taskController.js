const Task = require("../models/task");

// Criar tarefa
const createTask = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  const userId = req.user.id;

  const task = new Task({
    title,
    description,
    dueDate,
    priority,
    user: userId,
  });

  await task.save();
  res.status(201).json(task);
};

// Obter tarefas do usuário
const getTasks = async (req, res) => {
  const userId = req.user.id;
  const tasks = await Task.find({ user: userId });
  res.json(tasks);
};

module.exports = { createTask, getTasks };
