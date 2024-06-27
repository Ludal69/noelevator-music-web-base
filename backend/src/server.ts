import merchRoutes from "./routes/merchRoutes";
import contactRoutes from "./routes/contactRoutes";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite chaque IP à 100 requêtes par windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

// Register routes
app.use("/api/merch", merchRoutes);
app.use("/api/contact", contactRoutes);

export default app;
