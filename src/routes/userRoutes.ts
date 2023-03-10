import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const userRoutes = Router();

userRoutes.post("/create", new UserController().create)

userRoutes.post("/list", new UserController().list)

