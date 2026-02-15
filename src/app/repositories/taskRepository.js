let tasks = [];

exports.save = (task) =>{
    return tasks.push(task);
}

exports.findByUser = (userId)=>{
    return tasks.filter(t => t.userId === userId);
}