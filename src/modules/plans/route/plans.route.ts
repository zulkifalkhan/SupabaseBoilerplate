import express from "express";
import * as core from "express-serve-static-core";
import planController from "../controller/plans.controller";
import { handleValidationResult } from "../../../shared/utils/validationResult";
import { isAuthenticated } from "../../../shared/middlewares/auth.middleware";
import {
  createPlanValidator,
  updatePlanValidator,
} from "../validator/plans.validator";

const router = express.Router();

/**
 * User routes
 */
export function plansRoutes(): core.Router {
  // Create a new user
  router.post(
    "/",
    createPlanValidator(),
    handleValidationResult,
    async (req, res, next) => {
      try {
        const newUser = await planController.createPlan(req.body);
        res.status(201).json(newUser);
      } catch (error) {
        next(error);
      }
    }
  );

  // Get all plans
  router.get("/", isAuthenticated, async (req, res, next) => {
    try {
      const plans = await planController.getPlans();
      res.json(plans);
    } catch (error) {
      next(error);
    }
  });

  //  Get plan by ID
  router.get("/:userId", isAuthenticated, async (req, res, next) => {
    try {
      const planId = req.params.planId;
      const plan = await planController.getPlan(planId);
      if (!plan) {
        return res.status(404).json({ message: "Plan not found" });
      }
      res.json(plan);
    } catch (error) {
      next(error);
    }
  });

  //   // Update user by ID
  router.put(
    "/api/users/:userId",
    isAuthenticated,
    updatePlanValidator(),
    handleValidationResult,
    async (req, res, next) => {
      try {
        const planId = req.params.planId;
        const updatedPlan = await planController.updatePlan(planId, req.body);
        res.json(updatedPlan);
      } catch (error) {
        next(error);
      }
    }
  );

  return router;
}
