const crypto = require('crypto');

class TaskManager {
  constructor(tasks) {
    this.tasks = tasks || [];
  }

  createTask(task) {
    const newTask = {
      id: crypto.randomUUID(),
      description: task,
      status: 'todo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return newTask;
  }

  updateTask(id, newTask) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      return null;
    }
    task.description = newTask;
    task.updatedAt = new Date().toISOString();
    return task;
  }

  markDone(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      return null;
    }
    task.status = 'done';
    task.updatedAt = new Date().toISOString();
    return task;
  }

  markInProgress(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      return null;
    }
    task.status = 'in-progress';
    task.updatedAt = new Date().toISOString();
    return task;
  }

  listByStatus(status) {
    return this.tasks.filter((t) => t.status === status);
  }

  list() {
    return this.tasks;
  }
}

module.exports = TaskManager;
