import { IUser, UpdateUserRequest, UserResponse } from "../model";
import userService from "../service/user.service";

class UserController {
  async createUser(userData: IUser): Promise<{}> {
    try {
      console.log("controller");
      const newUser = await userService.createUser(userData);
      return newUser;
    } catch (error) {
      throw new Error("An error occurred while creating the user.");
    }
  }

  //   async getAllUsers(): Promise<User[]> {
  //     try {
  //       const users = await this.userService.getAllUsers();
  //       return users;
  //     } catch (error) {
  //       throw new Error("An error occurred while fetching users.");
  //     }
  //   }

  async getUser(userId: string): Promise<{}> {
    try {
      const user = await userService.getUser(userId);
      return user;
    } catch (error) {
      throw new Error("An error occurred while fetching the user.");
    }
  }

  async getUsers(): Promise<[]> {
    try {
      const user = await userService.getUsers();
      return user;
    } catch (error) {
      throw new Error("An error occurred while fetching the user.");
    }
  }

  async updateUser(
    userId: string,
    updatedUserData: UpdateUserRequest
  ): Promise<{} | null> {
    try {
      const updatedUser = await userService.updateUser(userId, updatedUserData);
      return updatedUser;
    } catch (error) {
      throw new Error("An error occurred while updating the user.");
    }
  }

  //   async deleteUser(userId: string): Promise<void> {
  //     try {
  //       await this.userService.deleteUser(userId);
  //     } catch (error) {
  //       throw new Error("An error occurred while deleting the user.");
  //     }
  //   }
}

export default new UserController();
