import merchRoutes from "./routes/merchRoutes";
import cors from "cors";

const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/merch", merchRoutes);

export default app;
