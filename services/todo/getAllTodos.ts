import { prisma } from "@/lib/prisma";

export const getAllTodos = async () => {
  const todos = await prisma.todo.findMany();
  await prisma.$disconnect();
  return todos;
};
