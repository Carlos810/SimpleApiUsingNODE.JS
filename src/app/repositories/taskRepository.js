/**
 * Repositorio en MEMORIA para desarrollo/pruebas locales
 * NOTA: Los datos se pierden al reiniciar el servidor
 * 
 * Para producción en AWS, usa lamdaRepository.js con DynamoDB
 */

let tasks = [];

/**
 * Guardar tarea
 * @param {Object} task - Tarea a guardar
 * @returns {Promise<Object>} Tarea guardada
 */
exports.create = async (task) => {
    tasks.push(task);
    return task;
}

/**
 * Obtener tareas por usuario
 * @param {string} userId - ID del usuario
 * @returns {Promise<Array>} Lista de tareas del usuario
 */
exports.getByUser = async (userId) => {
    return tasks.filter(t => t.userId === userId);
}