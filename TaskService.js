const TaskManager = require('./TaskManager');
const FileManager = require('./FileManager');

const {
  checkIfString,
  validateId,
  validateStatus,
} = require('./validationHelpers');

class TaskService {
  constructor(filePath) {
    this.fileManager = new FileManager(filePath);
    const savedTasks = this.fileManager.loadTasks();
    this.taskManager = new TaskManager(savedTasks); // Initialize TaskManager with loaded tasks
  }

  create(taskDescription) {
    checkIfString(taskDescription);
    const newTask = this.taskManager.createTask(taskDescription);

    this.taskManager.list().push(newTask);

    this._saveTasks(this.taskManager.list());
  }

  update(id, updates) {
    validateId(id);
    checkIfString(updates);
    const updatedTask = this.taskManager.updateTask(id, updates);
    const tasks = this.taskManager.list();
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
    }
    this._saveTasks(tasks);
  }

  markDone(id) {
    validateId(id);
    const updatedTask = this.taskManager.markDone(id);
    const tasks = this.taskManager.list();
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
    }
    this._saveTasks(tasks);
  }

  markInProgress(id) {
    validateId(id);
    const updatedTask = this.taskManager.markInProgress(id);
    const tasks = this.taskManager.list();
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTask;
    }
    this._saveTasks(tasks);
  }

  delete(id) {
    validateId(id);
    const tasks = this.taskManager.list().filter((task) => task.id !== id);
    this._saveTasks(tasks);
  }

  getByStatus(status) {
    validateStatus(status);
    console.log(this.taskManager.listByStatus(status));
  }

  list() {
    console.log(this.taskManager.tasks);
  }

  _saveTasks(tasks) {
    this.fileManager.saveTasks(tasks); // Write tasks to file
  }
}

module.exports = TaskService;
