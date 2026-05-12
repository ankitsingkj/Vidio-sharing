import express from "express";

import {
  login,
  register,
} from "../controllers/auth.controller";

import { validate } from "../middleware/validate.middleware";

import {
  loginSchema,
  registerSchema,
} from "../schemas/auth.schema";

const router = express.Router();

router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

export default router;