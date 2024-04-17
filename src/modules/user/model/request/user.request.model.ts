interface IUser {
  name: string;
  age: string;
  gender: Gender;
  height: string;
  weight: string;
}

enum Gender {
  Male = "Male",
  Female = "Female",
  RatherNotSay = "Rather not say",
}

interface UpdateUserRequest {
  name?: string;
  age?: string;
  gender?: Gender;
  height?: string;
  weight?: string;
}

export { IUser, Gender, UpdateUserRequest };
