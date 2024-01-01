"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const createTodoAction = async (formData: FormData) => {
  "use server";
  const completedBool = formData.get("completed") === "todo" ? false : true;
  const response = await axios.post(`${process.env.BASE_API_URL}/todo`, {
    title: formData.get("title"),
    description: formData.get("description"),
    completed: completedBool,
    userId: formData.get("userId"),
  });
  revalidatePath("/todo");
  console.log("Todo created successfully");
};
