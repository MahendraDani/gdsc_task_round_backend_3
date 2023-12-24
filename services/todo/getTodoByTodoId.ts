import { prisma } from "@/lib/prisma";

export const getTodoByTodoId = async (todoId: string) => {
  const data = await prisma.todo.findUnique({
    where: {
      id: todoId,
    },
  });
  await prisma.$disconnect();
  return data;
};
