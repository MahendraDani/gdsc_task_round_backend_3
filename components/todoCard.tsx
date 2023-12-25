"use server";
import { Todo } from "@/lib/types";
import { Button, Card, Flex, Text, AlertDialogRoot, AlertDialogContent, AlertDialogTrigger, AlertDialogTitle, AlertDialogAction, AlertDialogCancel, AlertDialogDescription } from "@radix-ui/themes";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { DeleteTodoComponent } from "./deleteTodoComponent";
import { DeleteTodoAction } from "@/actions/deleteTodoAction";
import { EditTodoComponent } from "./editTodoComponent";

interface TodoCardProps {
  title: string;
  id: string;
  description: string;
  completed: string;
}

export const TodoCard = ({ title, description, completed, id }: TodoCardProps) => {
  return (
    <div className="w-[21rem] overflow-hidden">
      <Card asChild className="p-1">
        <div>
          <Flex justify={'between'} align={'center'} className="w-full">
            <Text as="div" size="3" weight="bold" mb='1'>
              {title}
            </Text>
            <Flex justify={'between'} align={'center'} gap='3'>
              <EditTodoComponent id={id} title={title} description={description} completed={completed} />
              <DeleteTodoComponent id={id} />
            </Flex>
          </Flex>
          <Text as="div" color="gray" size="2">
            {description.length > 40 ? `${description.slice(0, 40)}...` : description}
          </Text>
        </div>
      </Card>
    </div>
  )
}

