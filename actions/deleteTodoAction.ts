import axios from "axios";
import { revalidatePath } from "next/cache";

export const DeleteTodoAction = async (formData: FormData) => {
  "use server";
  const response = await axios.delete(
    `${process.env.BASE_API_URL}/todo/${formData.get("id")}`
  );
  revalidatePath("/todo");
  console.log("Todo deleted successfully");
};
