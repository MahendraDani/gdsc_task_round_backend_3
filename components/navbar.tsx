"use server";
import { LoginLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes"
import Link from "next/link"
import { LogoutAlertDialog } from "./LogoutAlertDialog";

export const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession()
  const isAuthed = await isAuthenticated()
  return (
    <Container position='fixed' top='0' right='0' left='0' p='4' className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 z-10">
      <Flex justify='between'>
        <Box>
          <Link href={!isAuthed ? "/" : "/todo"} >
            <Heading color="crimson" className="cursor-pointer">Tododo</Heading>
          </Link>
        </Box>
        {
          !isAuthed ? <Flex justify='between' gap='2' align='center'>
            <Button variant="surface">
              <LoginLink>Login</LoginLink>
            </Button>
            <Button variant="soft">
              <RegisterLink>Register</RegisterLink>
            </Button>
          </Flex> : <LogoutAlertDialog />
        }
      </Flex>
    </Container>
  )
}