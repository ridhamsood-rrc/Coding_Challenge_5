// import express, and its type

import express, {Express} from "express";
import { healthCheckPoint } from "./api/v1/models/healthcheckmodel";

// Initialize the express application
const app: Express = express();

// parse json values automatically from the request body
app.use(express.json())

// respond to a GET request at the "/" endpoint
app.get("/api/v1/health", (req, res) => {
    // Create a response object that matches our interface
    const healthData: healthCheckPoint = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

export default app;