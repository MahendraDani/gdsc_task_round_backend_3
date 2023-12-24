import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// @service : getAllTodos
export const GET = async (req: Request) => {
  // const todos = await prisma.todo.findMany();
  // return NextResponse.json(
  //   { message: "Api route working", todo: todos },
  //   { status: 200, headers: { "content-type": "application/json" } }
  // );
  return NextResponse.json({ message: "Return all todos" });
};

//@service : create a new todo
export const POST = async () => {
  return NextResponse.json({ message: "Create a new todo from here" });
};
