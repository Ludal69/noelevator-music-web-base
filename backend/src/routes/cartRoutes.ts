// backend/src/routes/cartRoutes.ts

import { Router } from "express";
import { CartController } from "../controllers/cartController";
import authenticateToken from "../middleware/authenticateToken";

const router = Router();
const cartController = new CartController();

router.post(
  "/add",
  authenticateToken,
  cartController.addToCart.bind(cartController)
);
router.post(
  "/remove",
  authenticateToken,
  cartController.removeFromCart.bind(cartController)
);
router.get(
  "/",
  authenticateToken,
  cartController.getCartItems.bind(cartController)
);

export default router;
