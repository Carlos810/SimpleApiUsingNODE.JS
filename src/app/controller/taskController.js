const service = require('../services/taskService');

exports.createTask = (req, res) => {
  const { title } = req.body;

  const task = service.createTask(req.user.userId, title);

  res.json({
    success: true,
    data: task
  });
};

exports.getTasks = (req, res) => {
  const tasks = service.getTasks(req.user.userId);

  res.json({
    success: true,
    data: tasks
  });
};