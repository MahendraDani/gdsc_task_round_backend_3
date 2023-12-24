import { NextResponse } from "next/server";
import { getAllTodos } from "@/services/todo/getAllTodos";
import { createTodo } from "@/services/todo/createTodo";

export const GET = async () => {
  const todos = await getAllTodos();
  return NextResponse.json({ todo: todos, message: "Get all todos from here" });
};

export const POST = async (req: Request) => {
  const { title, description, completed, userId } = await req.json();
  const todo = await createTodo({ title, description, completed, userId });
  return NextResponse.json({ todo }, { status: 201 });
};

/*
userId, must be of the current user which should be exracted from users table
Better to put in url directly
*/
