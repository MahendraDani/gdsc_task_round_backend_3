import { findUser } from "@/services/user/findUser";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  // Fetch user details from kindle
  // Check if user exists with kindle id in userss table
  // If user doesn't exits insert it in users table
  // Feetch all todos of an user

  const { getUser, isAuthenticated } = getKindeServerSession();
  const isAuthed = await isAuthenticated();

  if (!isAuthed) {
    redirect("/")
  }
  const user: KindeUser | null = await getUser();
  const userId = user?.id;
  const email = user?.email;
  const firstName = user?.given_name;
  const lastName = user?.family_name;
  // Check if the user is already in table
  const isExistingUser = await findUser(userId!);
  if (!isExistingUser) {
    const response = await axios.post("http://localhost:3000/api/user", {
      firstName,
      lastName,
      email,
      id: userId
    })
  }
  return (
    <div>
      This is protected
      <div>
        <LogoutLink>Logout</LogoutLink>
      </div>
    </div>
  )
}