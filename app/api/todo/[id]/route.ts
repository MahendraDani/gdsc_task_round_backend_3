import { deleteTodo } from "@/services/todo/deleteTodo";
import { getTodoByTodoId } from "@/services/todo/getTodoByTodoId";
import { updateTodo } from "@/services/todo/updateTodo";
import { NextResponse } from "next/server";

// Get a todo by its id
export const GET = async (req: Request) => {
  const id = req.url.split("todo/")[1];
  const todo = await getTodoByTodoId(id);
  return NextResponse.json({
    message: "All routes based on todo id",
    todo,
  });
};

// Update a todo by its id
export const PUT = async (req: Request) => {
  const id = req.url.split("todo/")[1];
  const isExistingTodo = await getTodoByTodoId(id);
  if (!isExistingTodo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  const { title, description, completed } = await req.json();
  const todo = await updateTodo({ title, description, completed, id });
  return NextResponse.json({ message: "Todo updated successfully", todo });
};

// Delete a todo by its id
export const DELETE = async (req: Request) => {
  const id = req.url.split("todo/")[1];
  const isExistingTodo = await getTodoByTodoId(id);
  if (!isExistingTodo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  await deleteTodo(id);
  return NextResponse.json({ message: "Todo deleted successfully" });
};
