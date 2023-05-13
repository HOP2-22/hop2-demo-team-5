const express = require("express");
const router = express.Router();
const {
  get,
  create,
  deleteById,
  update,
  updateImg,
} = require("../controllers/CategoryController");

router.get("/", get);
router.post("/post", create);
router.put("/:id", update);
router.delete("/:id", deleteById);
router.put("/cat/:id", updateImg);

module.exports = router;
