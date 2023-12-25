import { Todo } from "@/lib/types";
import { Card, Text } from "@radix-ui/themes";
import Link from "next/link";

interface TodoCardProps {
  title: string;
  id: string;
  description: string;
}
export const TodoCard = ({ title, description, id }: TodoCardProps) => {
  return (
    <div className="w-[21rem] overflow-hidden">
      <Card asChild  >
        <Link href="/todo">
          <Text as="div" size="3" weight="bold">
            {title}
          </Text>
          <Text as="div" color="gray" size="2">
            {description.length > 40 ? `${description.slice(0, 40)}...` : description}
          </Text>
        </Link>
      </Card>
    </div>
  )
}