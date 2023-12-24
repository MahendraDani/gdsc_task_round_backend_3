import { prisma } from "@/lib/prisma";

export const GetTodosOfAllUser = async (userId: string) => {
  return await prisma.todo.findMany({
    where: {
      userId,
    },
  });
};
