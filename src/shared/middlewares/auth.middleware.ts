import { Request, Response, NextFunction } from "express";
import supabase from "../../db/config/config";

async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    const session = await supabase.auth.getUser(token);
    if (session && session.data) {
      // User is authenticated, allow access to the route
      next();
    } else {
      // User is not authenticated, send 401 Unauthorized response
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    // Handle any errors that occur during authentication check
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export { isAuthenticated };
