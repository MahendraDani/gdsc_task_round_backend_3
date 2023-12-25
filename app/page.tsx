import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Button, Heading } from '@radix-ui/themes'
import { redirect } from 'next/navigation';

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession()
  const isAuthed = await isAuthenticated();
  if (isAuthed) {
    redirect("/todo")
  }
  return (
    <main>
      <p>This is landing page</p>
    </main>
  )
}
