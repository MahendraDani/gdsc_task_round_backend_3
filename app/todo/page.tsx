import { findUser } from "@/services/user/findUser";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  // Fetch user details from kindle --done
  // Check if user exists with kindle id in userss table --done
  // If user doesn't exits insert it in users table --done
  // Feetch all todos of an user --PENDING

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
  const todosFetchResponse = await axios.get(`http://localhost:3000/api/user/todo/${userId}`);
  const todos = todosFetchResponse.data.todos;
  return (
    <div>
      This is protected
      <div>
        <LogoutLink>Logout</LogoutLink>
      </div>
      {/* TODO : Handle case when the user has no todos by giving a button to create todo, else map todos and show to user */}
      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </div>
  )
}