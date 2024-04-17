interface UserResponse {
  name: string;
  age: string;
  gender: Gender;
  height: number;
  weight: string;
}

enum Gender {
  Male = "Male",
  Female = "Female",
  RatherNotSay = "Rather not say",
}

interface UpdateUserResponse {
  name?: string;
  age?: string;
  gender?: Gender;
  height?: string;
  weight?: string;
}

export { UserResponse, UpdateUserResponse };
