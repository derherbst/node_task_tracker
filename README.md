# Node Task Tracker

[Project url](https://roadmap.sh/projects/task-tracker)

A command-line task tracker built using Node.js that allows you to manage tasks with commands such as add, update, delete, mark as done, and list tasks. Tasks are stored persistently in a JSON file, and the application ensures separation of concerns by managing tasks, validating inputs, and handling file operations in different modules.

## Features

- Add tasks with descriptions.
- Update task descriptions or statuses.
- Mark tasks as "done" or "in progress."
- Delete tasks.
- List tasks by status or show all tasks.

## Usage

You can run the task tracker using the command line with the following command syntax:

### Commands

1.  Add

```
node app.js add "Buy groceries"
```

2. Update

```
node app.js update "12345" "Buy groceries and cook dinner"
```

3.  Delete

```
node app.js delete "12345"
```

4.  Mark as done

```
node app.js markDone "12345"
```

5.  Mark in progress

```
node app.js markInProgress "12345"
```

6.  List all tasks or tasks by a specific status

```
node app.js list
//or
node app.js list "todo"
```

Note: task ID is represented by UUID from the crypto library

### Argument Validation

The application ensures that the correct number of arguments are passed for each command. If a command requires additional arguments (e.g., update requires a task ID and a new description), the application will notify you if the arguments are missing.

## Code Structure

- app.js: The entry point of the application. Handles user input and delegates the task management to the appropriate service.
- TaskManager.js: Handles task creation, updates, and status changes.
- FileManager.js: Manages reading from and writing to the JSON file that stores tasks.
- TaskService.js: Coordinates between TaskManager and FileManager to ensure tasks are updated and saved.
- validationHelpers.js: Contains helper functions for input validation.
- tasks.json: The file where tasks are persistently stored (created automatically).
