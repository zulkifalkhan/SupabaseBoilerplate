import { IUser, UpdateUserRequest } from "../../../modules/user/model";
import supabase from "../../config/config";

class UserRepository {
  async createUser(user: IUser): Promise<{}> {
    try {
      const { error } = await supabase.from("user").insert(user);

      if (error) {
        throw error;
      }

      return { message: "User created successfully" };
    } catch (error) {
      throw new Error("An error occurred while creating the user.");
    }
  }

  async getUser(id: string): Promise<{}> {
    try {
      const { data, error } = await supabase.from("user").select().eq("id", id);

      return data;
    } catch (error) {}
  }

  async getUsers(): Promise<[]> {
    try {
      const { data, error } = await supabase.from("user").select();

      return data as any;
    } catch (error) {}
  }

  async updateUserById(id: string, user: UpdateUserRequest): Promise<{}> {
    try {
      const { data, error } = await supabase
        .from("user")
        .update(user)
        .eq("id", id);

      return { message: "User updated successfully" };
    } catch (error) {}
  }
}

export default new UserRepository();
