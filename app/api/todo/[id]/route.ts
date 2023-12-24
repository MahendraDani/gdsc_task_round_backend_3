import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const id = req.url.split("todo/")[1];
  return NextResponse.json({ message: "All routes based on todo id", id });
};

// type PostRequestBody = {
//   title?: string;
//   description?: string;
// };
// export const POST = async (req: Request) => {
//   const { title, description }: PostRequestBody = await req.json();
//   return NextResponse.json({
//     message: "Its workgin ",
//     data: { title, description },
//   });
// };
