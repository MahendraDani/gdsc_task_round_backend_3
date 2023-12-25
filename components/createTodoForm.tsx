import { Text, Flex, TextArea, TextFieldRoot, TextFieldInput, Heading, SelectRoot, SelectTrigger, SelectContent, SelectGroup, SelectItem, Button } from "@radix-ui/themes";

export const CreateTodoForm = ({ userId }: { userId: string }) => {
  return (
    <Flex align='center' justify='between' gap='4' direction='column' p={'4'} className="sm:min-w-[25rem] min-w-[20rem] border-2 border-[#6D2545] rounded-lg">
      <Heading color="crimson">Create a new task</Heading>
      <Flex align='start' justify='between' gap='1' direction='column' className="w-full">
        <Text as="label" weight='light'>Title</Text>
        <TextFieldRoot className="w-full">
          <TextFieldInput name="title" placeholder="Sports" radius="large" size='2' />
        </TextFieldRoot>
      </Flex>
      <Flex align='start' justify='between' gap='1' direction='column' className="w-full">
        <Text as="label" weight={'light'}>Description</Text>
        <TextArea name="description" placeholder="Play football ...." className="w-full" />
      </Flex>
      <Flex align='start' justify='between' gap='1' direction='column' className="w-full">
        <Text as="label" weight={'light'}>Status</Text>
        <div className="w-full">
          <SelectRoot name="completed" defaultValue="todo" >
            <SelectTrigger radius="large" className="w-full" />
            <SelectContent variant="soft">
              <SelectGroup>
                <SelectItem value={"todo"}>Todo</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectGroup>
            </SelectContent>
          </SelectRoot>
        </div>
      </Flex>
      <div className="hidden">
        <TextFieldRoot>
          <TextFieldInput name="userId" value={userId} />
        </TextFieldRoot>
      </div>
      <Button variant="soft" type="submit">Create</Button>
    </Flex>
  )
}