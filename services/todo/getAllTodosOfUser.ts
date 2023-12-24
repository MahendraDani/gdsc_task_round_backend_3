import { prisma } from "@/lib/prisma";

export const GetTodosOfAllUser = async (userId: string) => {
  const data = await prisma.todo.findMany({
    where: {
      userId,
    },
  });
  await prisma.$disconnect();
  return data;
};
