import { createUser } from "@/services/user/createUser";
import { findUser } from "@/services/user/findUser";
import { NextResponse } from "next/server";

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

/**
 * TODO : Add a service to check is user is alredy present in users table then don't call above route
 */
