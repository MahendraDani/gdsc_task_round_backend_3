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
  return await prisma.user.create({
    data: {
      id,
      firstName,
      lastName,
      email,
    },
  });
};
