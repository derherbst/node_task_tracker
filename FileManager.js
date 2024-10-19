const fs = require('fs');

class FileManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  saveTasks(tasks) {
    fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2), 'utf-8');
  }

  loadTasks() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
}

module.exports = FileManager;
