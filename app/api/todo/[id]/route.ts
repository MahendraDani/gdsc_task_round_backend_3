import { getTodoByTodoId } from "@/services/todo/getTodoByTodoId";
import { updateTodo } from "@/services/todo/updateTodo";
import { NextResponse } from "next/server";

// @service : getTodoById
export const GET = async (req: Request) => {
  const id = req.url.split("todo/")[1];
  const todo = await getTodoByTodoId(id);
  return NextResponse.json({
    message: "All routes based on todo id",
    todo,
  });
};

// @service : updateTodoById
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

// @service : deleteTodoById
export const DELETE = async () => {
  return NextResponse.json({ message: " Delete a todo by its id" });
};
