import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  return NextResponse.json(
    { message: "Api route working", todo: "Return all todos from this file" },
    { status: 200, headers: { "content-type": "application/json" } }
  );
};
