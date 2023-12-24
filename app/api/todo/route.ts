import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req: Request) => {
  const prisma = new PrismaClient();
  const todos = await prisma.todo.findMany();
  return NextResponse.json(
    { message: "Api route working", todo: todos },
    { status: 200, headers: { "content-type": "application/json" } }
  );
};
