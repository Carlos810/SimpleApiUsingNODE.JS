const {v4:uuid} =  require('uuid');
const repository = require('../repositories/taskRepository');

exports.createTask = (userId,title) =>{
    const task = {
        taskId : uuid(),
        userId,
        title,
        status: "PENDING",
        createdAt: new Date().toISOString()
    }
    return repository.save(task);
}

exports.getTasks = (userId) => {
    return repository.findByUser(userId);
}