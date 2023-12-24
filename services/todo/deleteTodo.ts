import { prisma } from "@/lib/prisma";

export const deleteTodo = async (id: string) => {
  await prisma.todo.delete({ where: { id } });
  await prisma.$disconnect();
};
