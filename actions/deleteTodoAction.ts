import axios from "axios";

export const DeleteTodoAction = async (formData: FormData) => {
  "use server";
  const response = await axios.delete(
    `${process.env.BASE_API_URL}/todo/${formData.get("id")}`
  );
  console.log("Todo deleted successfully");
};
