import { prisma } from "@/lib/prisma";

interface UpdateTodoProps {
  title: string;
  description: string;
  completed: boolean;
  id: string;
}

export const updateTodo = async ({
  title,
  description,
  completed,
  id,
}: UpdateTodoProps) => {
  const data = await prisma.todo.update({
    where: { id },
    data: {
      title,
      description,
      completed,
    },
  });
  await prisma.$disconnect();
  return data;
};
