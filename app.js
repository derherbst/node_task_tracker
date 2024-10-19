const TaskService = require('./TaskService');
const { validateCommand } = require('./validationHelpers');

// Get the positional arguments (ignoring the first two: node path and script path)
const args = process.argv.slice(2);

process.on('unhandledRejection', (reason, promise) => {
  console.log({ unhandledRejection: { reason, promise } });
});

const fileName = 'tasks.json';
const command = args[0];
const content = args[1];
const content2 = args[2];

const taskService = new TaskService(fileName);

function handleInput(command, content, content2) {
  validateCommand(command, args.slice(1));

  switch (command) {
    case 'add':
      taskService.create(content);
      break;
    case 'update':
      taskService.update(content, content2);
      break;
    case 'delete':
      taskService.delete(content);
      break;
    case 'markDone':
      taskService.markDone(content);
      break;
    case 'markInProgress':
      taskService.markInProgress(content);
      break;
    case 'list':
      if (content) {
        taskService.getByStatus(content);
        break;
      }
      taskService.list();
      break;
    default:
      console.error('Invalid command:', command);
  }
}

handleInput(command, content, content2);
