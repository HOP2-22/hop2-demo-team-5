const express = require("express");
const router = express.Router();
const {
  get,
  create,
  deleteById,
  update,
} = require("../controllers/CategoryController");

router.get("/", get);
router.post("/post", create);
router.put("/:id", update);
router.delete("/:id", deleteById);

module.exports = router;
