import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.status(401).json({ message: "No token provided" });
  } else {
    //verification logic here
    next();
  }
};
