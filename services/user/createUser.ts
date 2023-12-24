import { prisma } from "@/lib/prisma";

interface CreateUserProps {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}
export const createUser = async ({
  firstName,
  lastName,
  email,
  id,
}: CreateUserProps) => {
  const data = await prisma.user.create({
    data: {
      id,
      firstName,
      lastName,
      email,
    },
  });
  await prisma.$disconnect();
  return data;
};
