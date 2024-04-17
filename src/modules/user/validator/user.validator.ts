import { body } from "express-validator";
import { Gender } from "../model";

const createUserValidator = () => {
  return [
    body("name").isString().withMessage("Name is required"),
    body("age").isString().withMessage("Age is reauired"),
    body("gender").isIn(Object.values(Gender)).withMessage("Invalid gender"),
    body("height").isString().withMessage("Height is required"),
    body("weight").isString().withMessage("Weight is required"),
  ];
};

const updateUserValidator = () => {
  return [
    body("name").optional().isString().withMessage("Name is required"),
    body("age").optional().isString().withMessage("Age is reauired"),
    body("gender")
      .optional()
      .isIn(Object.values(Gender))
      .withMessage("Invalid gender"),
    body("height").optional().isString().withMessage("Height is required"),
    body("weight").optional().isString().withMessage("Weight is required"),
  ];
};

export { createUserValidator, updateUserValidator };
