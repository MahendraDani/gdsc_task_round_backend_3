import { prisma } from "@/lib/prisma";

export const getTodoByTodoId = async (todoId: string) => {
  return await prisma.todo.findUnique({
    where: {
      id: todoId,
    },
  });
};
