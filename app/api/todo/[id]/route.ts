import { getTodoByTodoId } from "@/services/todo/getTodoByTodoId";
import { NextResponse } from "next/server";

// @service : getTodoById
export const GET = async (req: Request) => {
  const id = req.url.split("todo/")[1];
  const todo = await getTodoByTodoId(id);
  return NextResponse.json({
    message: "All routes based on todo id",
    todo,
    id,
  });
};

// @service : updateTodoById
export const PUT = async () => {
  return NextResponse.json({ message: "Update a todo" });
};

// @service : deleteTodoById
export const DELETE = async () => {
  return NextResponse.json({ message: " Delete a todo by its id" });
};
