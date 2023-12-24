import { GetTodosOfAllUser } from "@/services/todo/getAllTodosOfUser";
import { createUser } from "@/services/user/createUser";
import { findUser } from "@/services/user/findUser";
import { NextResponse } from "next/server";

// add new user to users table
export const POST = async (req: Request) => {
  const { firstName, lastName, id, email } = await req.json();
  const isExistingUser = await findUser(id);
  if (isExistingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }
  const user = await createUser({ firstName, lastName, id, email });
  return NextResponse.json({ user }, { status: 201 });
};
