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
  return await prisma.todo.create({
    data: {
      title,
      description,
      completed,
      userId,
    },
  });
};
