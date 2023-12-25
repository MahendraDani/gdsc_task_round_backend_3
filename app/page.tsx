import { Footer } from '@/components/footer';
import { LoginLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { AspectRatio, Badge, Button, Container, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession()
  const isAuthed = await isAuthenticated();
  if (isAuthed) {
    redirect("/todo")
  }
  return (
    <main>

      <Container>
        <div className='w-full flex justify-center items-center gap-8 flex-col p-4 sm:p-6 mt-8 md:mt-16'>
          <div className='max-w-[90%] text-center mt-8'>
            <div className='sm:hidden'>
              <Heading weight={'bold'} size={'8'} highContrast color='pink'>Unlock Your Productivity Potential, Your To-Dos, Your Rules, Your Victory!</Heading>
            </div>
            <div className='hidden sm:block'>
              <Heading weight={'bold'} size={'9'} highContrast color='pink'>Unlock Your Productivity Potential, Your To-Dos, Your Rules, Your Victory!</Heading>
            </div>
          </div>
          <div className='max-w-[80%] text-center mt-2'>
            <Text as='p' size={'5'} color='gray'>
              Elevate your day with our intuitive todo app — where dreams meet deadlines. Seamlessly organize, conquer, and celebrate your achievements, one task at a time.
            </Text>
          </div>
          <div>
            <Button variant='soft' size={'3'}>
              <LoginLink>Get Started</LoginLink>
            </Button>
          </div>
        </div>

      </Container>
      <Footer />
    </main >
  )
}
