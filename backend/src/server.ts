import merchRoutes from "./routes/merchRoutes";
import contactRoutes from "./routes/contactRoutes";
import cors from "cors";

const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/merch", merchRoutes);
app.use("/api/contact", contactRoutes);

export default app;
