import { findUser } from "@/services/user/findUser";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";
import { TabsRoot, TabsTrigger, TabsContent, TabsList, Box, Container, Flex, Heading } from "@radix-ui/themes";
import { Todo } from "@/lib/types";
import Link from "next/link";
import { TodoCard } from "@/components/todoCard";
import { createTodoAction } from "@/actions/createTodoAction";
import { CreateTodoForm } from "@/components/createTodoForm";
import { Navbar } from "@/components/navbar";

export default async function ProtectedPage() {
  // Fetch user details from kindle --done
  // Check if user exists with kindle id in userss table --done
  // If user doesn't exits insert it in users table --done
  // Feetch all todos of an user --PENDING

  const { getUser, isAuthenticated } = getKindeServerSession();
  const isAuthed = await isAuthenticated();

  if (!isAuthed) {
    redirect("/")
  }
  const user: KindeUser | null = await getUser();
  const userId = user?.id;
  const email = user?.email;
  const firstName = user?.given_name;
  const lastName = user?.family_name;
  // Check if the user is already in table
  const isExistingUser = await findUser(userId!);
  if (!isExistingUser) {
    const response = await axios.post(`${process.env.BASE_API_URL}/user`, {
      firstName,
      lastName,
      email,
      id: userId
    })
  }
  const todosFetchResponse = await axios.get(`${process.env.BASE_API_URL}/user/todo/${userId}`);
  let completedTodos;
  let incompleteTodos;

  if (todosFetchResponse.data.todos.length === 0) {
    completedTodos = [];
    incompleteTodos = [];
  } else {
    const todos = todosFetchResponse.data.todos;
    completedTodos = todos.filter((todo: Todo) => todo.completed)
    incompleteTodos = todos.filter((todo: Todo) => !todo.completed)
  }


  return (
    <div>
      <Container>
        <TabsRoot defaultValue="Tasks">
          <TabsList>
            <TabsTrigger value="Tasks">Tasks</TabsTrigger>
            <TabsTrigger value="Done">Done</TabsTrigger>
            <TabsTrigger value="New">New</TabsTrigger>

          </TabsList>

          <Box px="4" pt="3" pb="2" mt='5'>
            <TabsContent value="Tasks">
              <Flex direction={{
                initial: "column",
                sm: 'row'
              }} gap='4' wrap='wrap' align='center'>
                {incompleteTodos.length === 0 ? <Flex align='center' justify='center' direction='column' className="">
                  <Heading>It seems that you don't have any todos yet! Please create todos first</Heading>
                </Flex> : incompleteTodos.reverse().map((todo: Todo) => {
                  return (
                    <TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed ? "done" : "todo"} />
                  )
                })}
              </Flex>
            </TabsContent>

            <TabsContent value="Done">
              <Flex direction={{
                initial: "column",
                sm: 'row'
              }} gap='4' wrap='wrap' align='center'>
                {completedTodos.length === 0 ? <Flex align='center' justify='center' direction='column' className="">
                  <Heading>It seems that you don't have any todos yet! Please create todos first</Heading>
                </Flex> : completedTodos.reverse().map((todo: Todo) => {
                  return (
                    <TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed ? "done" : "todo"} />
                  )
                })}
              </Flex>
            </TabsContent>
            <TabsContent value="New">
              <Flex align='center' justify='center' direction='column' mt={'9'}>
                <form action={createTodoAction}>
                  <CreateTodoForm userId={userId!} />
                </form>
              </Flex>
            </TabsContent>
          </Box>
        </TabsRoot>

      </Container>
    </div>
  )
}