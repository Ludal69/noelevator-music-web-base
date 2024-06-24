import { Router } from "express";
import { MerchController } from "../controllers/merchController";

const router = Router();
const merchController = new MerchController();

router.get("/", merchController.getAll.bind(merchController));
router.post("/", merchController.create.bind(merchController));
router.get("/:id", merchController.getById.bind(merchController));
router.put("/:id", merchController.update.bind(merchController));
router.delete("/:id", merchController.delete.bind(merchController));

export default router;
