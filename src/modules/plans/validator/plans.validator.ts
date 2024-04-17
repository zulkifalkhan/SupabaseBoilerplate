import { body } from "express-validator";
import { Status } from "../model/plans.model";

const createPlanValidator = () => {
  return [
    body("user_id").isString().withMessage("User Id is required"),
    body("plan_type").isString().withMessage("Plan type is reauired"),
    body("plan_status")
      .isIn(Object.values(Status))
      .withMessage("Invalid status"),
    body("start_date").isString().withMessage("Start date is required"),
    body("end_date").isString().withMessage("End date is required"),
  ];
};

const updatePlanValidator = () => {
  return [
    body("user_id").optional().isString().withMessage("User Id is required"),
    body("plan_type")
      .optional()
      .isString()
      .withMessage("Plan type is reauired"),
    body("plan_status")
      .optional()
      .isIn(Object.values(Status))
      .withMessage("Invalid status"),
    body("start_date")
      .optional()
      .isString()
      .withMessage("Start date is required"),
    body("end_date").optional().isString().withMessage("End date is required"),
  ];
};

export { createPlanValidator, updatePlanValidator };
