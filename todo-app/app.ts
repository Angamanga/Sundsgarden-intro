import * as readline from "readline";
import chalk from "chalk";

// Define colour-type (Could be more colours but I decided to go with a 
// limited number of choices for this task)
type TodoColour = "green" | "red" | "blue" | "yellow" | "black";
// Define Todo type
type Todo = {
  id: number;
  text: string;
  colour: TodoColour;
}

// Store todos in memory (array)
let todos: Todo[] = [];

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Checking if the colour is allowed
const checkColour = (colour: string): TodoColour => {
  const allowedColours = ["green", "red", "blue", "yellow", "black"];
  if(allowedColours.includes(colour)) {
    // explicitly setting the type as TodoColour
    return colour as TodoColour;
  } 
  // using black as default if no colour or an invalid colour is added
  return "black";
}

// Add a new todo
const addTodo = (): void => {
  rl.question("Enter task: ", (text: string) => {
    if (text.trim() === "") {
      console.log("Task cannot be empty!\n");
      showMenu()
    } else {
      rl.question("Enter colour (green, red, blue or yellow):", (colour: string)=> {
        // Assigning data including colour to the todo
        const newTodo: Todo = {
          id: Date.now(),
          text: text.trim(),
          colour: checkColour(colour.trim().toLowerCase())
      };
          todos.push(newTodo);
          console.log(chalk.magentaBright("✓ Task added successfully!\n"));
          showMenu();
      });
    }
  });
};

// List all todos
const listTodos = (): void => {
  console.clear();
  console.log("\n=== Todo List App ===");
  console.log("Commands: add, list, remove, exit\n");

  if (todos.length === 0) {
    console.log(chalk.red("No todos yet!\n"));
  } else {
    console.log("Your Todos:");
    todos.forEach((todo: Todo) => {
      // using the colour when logging the todo
      console.log(chalk[todo.colour](`${todo.id}. ${todo.text}`));
    });
    console.log("");
  }

  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

// Remove a todo
const removeTodo = (): void => {
  rl.question("Enter task ID to remove: ", (input: string) => {
    const id: number = parseInt(input);

    // Use filter to create new array without the todo
    const updatedTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id);

    if (updatedTodos.length === todos.length) {
      console.log("Task not found!\n");
    } else {
      todos = updatedTodos;
      console.log("Task removed successfully!\n");
    }

    showMenu();
  });
};

// Handle command logic
const handleCommand = (command: string): void => {
  switch (command.trim().toLowerCase()) {
    case "add":
      addTodo();
      break;
    case "list":
      listTodos();
      break;
    case "remove":
      removeTodo();
      break;
    case "exit":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Unknown command\n");
      showMenu();
  }
};

// Show menu and handle commands
const showMenu = (): void => {
  console.clear();
  console.log(chalk.greenBright("\n=== Todo List App ==="));
  console.log("Commands: add, list, remove, exit\n");
  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

// Start the app
console.log("\n=== Todo List App ===");
console.log("Commands: add, list, remove, exit\n");
showMenu();