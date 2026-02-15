const service = require('../services/taskService');

/**
 * Crear una tarea
 * POST /tasks
 */
exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const task = await service.createTask(req.user.userId, title);

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    console.error('Error creando tarea:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/**
 * Obtener tareas del usuario
 * GET /tasks
 */
exports.getTasks = async (req, res) => {
  try {
    const tasks = await service.getTasks(req.user.userId);

    res.json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error('Error obteniendo tareas:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};