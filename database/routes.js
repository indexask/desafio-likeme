const { Router } = require("express"),
    {getAllPosts, createPost} = require("./consultas")

const router = Router();

router.get("/posts", getAllPosts);
router.post("/posts", createPost);

module.exports = router;

