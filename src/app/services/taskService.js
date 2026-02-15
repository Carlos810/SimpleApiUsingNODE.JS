/**
 * Servicio de tareas
 * Usa abstracción de repositorio (repositoryFactory) para cambiar entre LOCAL/AWS
 */

const {v4:uuid} = require('uuid');
const repository = require('../repositories/repositoryFactory');

/**
 * Crear una nueva tarea
 * @param {string} userId - ID del usuario
 * @param {string} title - Título de la tarea
 * @returns {Promise<Object>} Tarea creada
 */
exports.createTask = async (userId, title) => {
    const task = {
        taskId: uuid(),
        userId,
        title,
        status: "PENDING",
        createdAt: new Date().toISOString()
    }
    return await repository.create(task);
}

/**
 * Obtener tareas de un usuario
 * @param {string} userId - ID del usuario
 * @returns {Promise<Array>} Lista de tareas
 */
exports.getTasks = async (userId) => {
    return await repository.getByUser(userId);
}