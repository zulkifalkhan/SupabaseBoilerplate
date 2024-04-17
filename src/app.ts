import express from "express";
import authRouter from "./auth/route/auth.route";
import { userRoutes } from "./modules/user/route/user.route";
import { plansRoutes } from "./modules/plans/route/plans.route";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes

app.use("/auth", authRouter); // Mount authRouter under the /auth path
// Routes
app.use("/api/users", userRoutes()); // Mount userRouter under the /users path
app.use("/api/plans", plansRoutes()); // Mount userRouter under the /plans path

app.listen(port, () => {
  return console.log(`Supabase`);
});
