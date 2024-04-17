import express from "express";
import authService from "../service/auth.service";
import { signInValidator, signUpValidator } from "../validator/auth.validator";
import { signIn, signUp } from "../model/auth.model.js";

const router = express.Router();

// Route for user sign-in
router.post("/signin", signInValidator, async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data } = await authService.signIn({ email, password });
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route for user sign-up
router.post("/signup", signUpValidator, async (req, res) => {
  const { email, password } = req.body as signUp;
  try {
    const { data } = await authService.signUp({ email, password });
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/session", async (req, res) => {
  try {
    const { data } = await authService.getUserSession();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/refresh", async (req, res) => {
  try {
    const { data } = await authService.refreshUserSession(
      req.body.refresh_token
    );
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
