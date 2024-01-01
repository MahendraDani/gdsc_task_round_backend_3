import axios from "axios";
import { revalidatePath } from "next/cache";

export const EditTodoAction = async (formData: FormData) => {
  "use server";
  const completedBool = formData.get("completed") === "todo" ? false : true;
  const response = await axios.put(
    `${process.env.BASE_API_URL}/todo/${formData.get("id")}`,
    {
      title: formData.get("title"),
      description: formData.get("description"),
      completed: completedBool,
    }
  );
  revalidatePath("/todo");
  console.log("Todo updated successfully");
};
