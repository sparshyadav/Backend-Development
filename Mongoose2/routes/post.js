const express = require("express");
const router = express.Router();

router.get("/", getAllPost);
router.post("/", postAddPost);
router.get("/:id", getOnePost);
router.delete("/:id", deleteOnePost);
router.put("/:id", putUpdatePost);

module.exports = router;