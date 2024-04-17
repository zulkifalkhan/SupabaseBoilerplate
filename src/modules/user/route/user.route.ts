import express from "express";
import * as core from "express-serve-static-core";
import userController from "../controller/user.controller";
import { handleValidationResult } from "../../../shared/utils/validationResult";
import { isAuthenticated } from "../../../shared/middlewares/auth.middleware";
import {
  createUserValidator,
  updateUserValidator,
} from "../validator/user.validator";

const router = express.Router();

/**
 * User routes
 */
export function userRoutes(): core.Router {
  // Create a new user
  router.post(
    "/",
    createUserValidator(),
    handleValidationResult,
    async (req, res, next) => {
      try {
        const newUser = await userController.createUser(req.body);
        res.status(201).json(newUser);
      } catch (error) {
        next(error);
      }
    }
  );

  //   // Get all users
  router.get("/", isAuthenticated, async (req, res, next) => {
    try {
      const users = await userController.getUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  });

  //   // Get user by ID
  router.get("/:userId", isAuthenticated, async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const user = await userController.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

  //   // Update user by ID
  router.put(
    "/api/users/:userId",
    isAuthenticated,
    updateUserValidator(),
    handleValidationResult,
    async (req, res, next) => {
      try {
        const userId = req.params.userId;
        const updatedUser = await userController.updateUser(userId, req.body);
        res.json(updatedUser);
      } catch (error) {
        next(error);
      }
    }
  );

  //   // Delete user by ID
  //   router.delete('/api/users/:userId', isAuthenticated, async (req, res, next) => {
  //     try {
  //       const userId = req.params.userId;
  //       await userController.deleteUser(userId);
  //       res.status(204).end();
  //     } catch (error) {
  //       next(error);
  //     }
  //   });

  return router;
}
