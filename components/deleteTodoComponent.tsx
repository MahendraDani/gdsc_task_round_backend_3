import { Button, Card, Flex, Text, AlertDialogRoot, AlertDialogContent, AlertDialogTrigger, AlertDialogTitle, AlertDialogAction, AlertDialogCancel, AlertDialogDescription } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons"
import { DeleteTodoAction } from "@/actions/deleteTodoAction";

export const DeleteTodoComponent = ({ id }: { id: string }) => {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger>
        <button><TrashIcon /></button>
      </AlertDialogTrigger>
      <AlertDialogContent style={{ maxWidth: 450 }}>
        <AlertDialogTitle>Delete Todo</AlertDialogTitle>
        <AlertDialogDescription size="2">
          Are you sure? This todo will no longer be visible.
        </AlertDialogDescription>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialogCancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <form action={DeleteTodoAction}>
              <input name="id" className="hidden" value={id} />
              <Button variant="solid" color="red">
                Delete
              </Button>
            </form>

          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialogRoot>
  )
}