import express, { Router } from "express";
import * as libraryController from "../controllers/resourceController";

const router: Router = express.Router();

router.get("/", libraryController.getResources);

export default router