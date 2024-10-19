const commandConfig = {
  add: 1,
  update: 2,
  delete: 1,
  markDone: 1,
  markInProgress: 1,
  list: 0,
};

const validateCommand = (command, args) => {
  const requiredArgs = commandConfig[command];
  if (requiredArgs === undefined) {
    throw new Error('Invalid command:', command);
  }

  // Check if the required number of arguments are passed
  if (args.length !== requiredArgs && command !== 'list') {
    throw new Error(
      `Command "${command}" requires ${requiredArgs} arguments, but got ${args.length}.`
    );
  }

  return true;
};

const checkIfString = (value) => {
  if (!isNaN(value)) {
    throw new Error('Argument must be a string');
  }
};

const validateId = (id) => {
  if (typeof id !== 'string') {
    throw new Error('Invalid task ID. Please provide a valid task ID.');
  }
};

const validateStatus = (status) => {
  if (!['todo', 'in-progress', 'done'].includes(status)) {
    throw new Error('Invalid status. Please provide a valid status.');
  }
};

module.exports = { checkIfString, validateId, validateStatus, validateCommand };
