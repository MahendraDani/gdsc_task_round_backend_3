import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function ProtectedPage() {
  return (
    <div>
      This is protected
      <div>
        <LogoutLink>Logout</LogoutLink>
      </div>
    </div>
  )
}