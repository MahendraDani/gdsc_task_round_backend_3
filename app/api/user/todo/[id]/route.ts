import { GetTodosOfAllUser } from "@/services/todo/getAllTodosOfUser";
import { NextResponse } from "next/server";
// get all todos of an user
export const GET = async (req: Request) => {
  const userId = req.url.split("todo/")[1];
  const todos = await GetTodosOfAllUser(userId);

  // if (todos.length === 0) {
  //   return NextResponse.json({ message: "Not found" }, { status: 404 });
  // }
  return NextResponse.json({ todos });
};
