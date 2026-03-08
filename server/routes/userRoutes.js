import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {

  res.json({
    message: "Protected profile data",
    userId: req.userId
  });

});

export default router;