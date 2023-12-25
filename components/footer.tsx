import { Container, Text } from "@radix-ui/themes"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const Footer = () => {
  return (
    <Container>
      <div className="w-full absolute bottom-0 left-0 right-0 flex flex-col gap-1 p-3 justify-center items-center h-16">
        <Text size={'2'}>Developed by Mahendra Dani</Text>
        <div className="flex justify-between items-center gap-2">
          <Link href={"https://github.com/MahendraDani"} target="_blank">
            <GitHubLogoIcon />
          </Link>
          <Link href={"https://linkedin.com/in/mahendra-dani"} target="_blank">
            <LinkedInLogoIcon />
          </Link>
        </div>
      </div>
    </Container>
  )
}