import { Router } from "express";
import { Todo } from "../../models/todo";

const router = Router();

let todos: Todo[] = [];

router.post("/", (req, res, _next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  todos.push(newTodo);

  res
    .status(201)
    .jsend.success({ message: "Created the todo.", createdTodo: newTodo });
});

router.get("/", (_req, res, _next) => {
  res.jsend.success({ todos: todos });
});

router.patch("/:id", (req, res, _next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;

  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    res.jsend.error({ message: "Could not find todo!", code: 500 });
    return;
  }

  todos[todoIndex] = new Todo(
    todos[todoIndex].id,
    updatedText,
    todos[todoIndex].completed
  );
  res.jsend.success({ message: "Updated!", updatedTodo: todos[todoIndex] });
});

router.put("/:id", (req, res, _next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    res.jsend.error({ message: "Could not find todo!", code: 500 });
    return;
  }

  todos[todoIndex] = new Todo(
    todos[todoIndex].id,
    updatedText,
    todos[todoIndex].completed
  );
  res.jsend.success({ message: "Updated!", updatedTodo: todos[todoIndex] });
});

router.delete("/:id", (req, res, _next) => {
  const todoId = req.params.id;
  todos = todos.filter((todo) => todo.id !== todoId);
  res.jsend.success({ message: "Todo deleted!" });
});

router.post("/:id/complete", (req, res, _next) => {
  const todoId = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    res.jsend.error({ message: "Could not find todo!", code: 500 });
    return;
  }

  todos[todoIndex] = new Todo(todos[todoIndex].id, todos[todoIndex].text, true);
  res.jsend.success({
    message: "Completed the todo!",
    completedTodo: todos[todoIndex],
  });
});

export default router;
