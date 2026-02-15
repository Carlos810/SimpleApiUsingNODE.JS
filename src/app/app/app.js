const express = require('express');
const cors = require('cors');
const taskController = require('../controller/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const app = express();
app.use(cors())
app.use(express.json());

app.post('/tasks',authMiddleware, taskController.createTask);
app.get('/tasks',authMiddleware, taskController.getTasks);

module.exports = app;