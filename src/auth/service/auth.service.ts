import supabase from "../../db/config/config";
import { signIn, signUp } from "../model/auth.model";

class AuthService {
  async signIn(signInUser: signIn) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword(
        signInUser
      );
      if (error) {
        throw error;
      }
      return { data };
    } catch (error) {
      // Handle error
      this.handleError(error);
    }
  }

  async signUp(signUpUser: signUp) {
    try {
      const { data, error } = await supabase.auth.signUp(signUpUser);
      if (error) {
        throw error;
      }
      return { data };
    } catch (error) {
      // Handle error
      this.handleError(error);
    }
  }

  async getUserSession() {
    try {
      const { data } = await supabase.auth.getSession();

      supabase.auth.refreshSession;

      return { data };
    } catch (error) {
      this.handleError(error);
    }
  }

  async refreshUserSession(refresh_token: string) {
    try {
      const { data } = await supabase.auth.refreshSession({ refresh_token });

      return { data };
    } catch (error) {
      this.handleError(error);
    }
  }

  // Function to handle errors
  handleError(error: Error) {
    // Log the error or perform any other error handling tasks
    console.error("An error occurred:", error.message);
    // You can also throw a custom error or return a specific error response
    throw new Error("An error occurred while processing your request.");
  }
}

export default new AuthService();
