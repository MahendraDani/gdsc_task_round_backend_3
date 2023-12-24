import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function ProtectedPage() {
  // Fetch user details from kindle
  // Check if user exists with kindle id in userss table
  // If user doesn't exits insert it in users table
  // Feetch all todos of an user
  return (
    <div>
      This is protected
      <div>
        <LogoutLink>Logout</LogoutLink>
      </div>
    </div>
  )
}