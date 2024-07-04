import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authenticateToken from "./middleware/authenticateToken";
import contactRoutes from "./routes/contactRoutes";
import cartRoutes from "./routes/cartRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

// Configurer CORS
const corsOptions = {
  origin: "http://localhost:3000", // Remplacez par l'origine de votre client
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

// Register routes
app.use("/api/contact", contactRoutes);
app.use("/api/cart", authenticateToken, cartRoutes); // Protect cart routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); // Register user routes

export default app;
