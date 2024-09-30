import { type Request, type Response, Router } from "express";

import { Todo } from "../../models/todo";

// Define interfaces for request bodies and parameters
interface TodoBody {
	text: string;
}

const router = Router();

const generateUUID = () => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

const todoItems: Todo[] = [
	{
		id: generateUUID(),
		text: "Deploy Express v5 to Vercel",
		completed: false,
	},
];

router.post(
	"/",
	(
		req: Request<
			unknown,
			{
				message: string;
				createdTodo: Todo;
			},
			TodoBody
		>,
		res: Response,
	) => {
		const { text } = req.body;

		if (!text) {
			res.status(400).jsend.error("Text is required");
			return;
		}

		const newTodo = new Todo(generateUUID(), text);
		todoItems.push(newTodo);

		res
			.status(201)
			.jsend.success({ message: "Created the todo.", createdTodo: newTodo });
	},
);

router.get("/", (_req, res, _next) => {
	res.jsend.success({ items: todoItems });
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	const todo = todoItems.find((item) => item.id === id);

	if (!todo) {
		res.status(404).jsend.error("Todo not found");
		return;
	}

	res.jsend.success(todo);
});

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { text, completed } = req.body;

	const todo = todoItems.find((item) => item.id === id);

	if (!todo) {
		res.status(404).jsend.error("Todo not found");
		return;
	}

	if (text) {
		todo.text = text;
	}

	if (completed !== undefined) {
		todo.completed = completed;
	}

	res.jsend.success(todo);
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	const index = todoItems.findIndex((item) => item.id === id);

	if (index === -1) {
		res.status(404).jsend.error("Todo not found");
		return;
	}

	todoItems.splice(index, 1);
	res.jsend.success({ message: "Todo deleted." });
});

router.patch("/:id", (req, res) => {
	const { id } = req.params;
	const { text, completed } = req.body;

	const todo = todoItems.find((item) => item.id === id);

	if (!todo) {
		res.status(404).jsend.error("Todo not found");
		return;
	}

	if (text) {
		todo.text = text;
	}

	if (completed !== undefined) {
		todo.completed = completed;
	}

	res.jsend.success(todo);
});

export default router;
