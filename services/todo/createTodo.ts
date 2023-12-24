import { prisma } from "@/lib/prisma";

interface CreateTodoProps {
  title: string;
  description: string;
  completed: boolean;
  userId: string;
}

export const createTodo = async ({
  title,
  description,
  completed,
  userId,
}: CreateTodoProps) => {
  const data = await prisma.todo.create({
    data: {
      title,
      description,
      completed,
      userId,
    },
  });
  await prisma.$disconnect();
  return data;
};
