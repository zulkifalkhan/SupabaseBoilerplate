import { IUser, UpdateUserRequest, UserResponse } from "../model";
import userRepository from "../../../db/repositories/user/user.repository";

class UserService {
  async createUser(userData: IUser): Promise<{}> {
    // Add any business logic or validation here before creating the user

    const newUser = await userRepository.createUser(userData);
    return newUser;
  }

  async getUsers(): Promise<[]> {
    // Retrieve all users from the database
    const users = await userRepository.getUsers();
    return users;
  }

  async getUser(userId: string): Promise<{}> {
    // Retrieve a user by ID from the database
    const user = await userRepository.getUser(userId);
    return user;
  }

  async updateUser(
    userId: string,
    updatedUserData: UpdateUserRequest
  ): Promise<{} | null> {
    // Update a user in the database
    const updatedUser = await userRepository.updateUserById(
      userId,
      updatedUserData
    );
    return updatedUser;
  }

  //   async deleteUser(userId: string): Promise<void> {
  //     // Delete a user from the database
  //     await this.userRepository.deleteUser(userId);
  //   }
}

export default new UserService();
