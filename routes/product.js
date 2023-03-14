const express = require("express");
const router = express.Router();

const {
    createProduct,getAll,viewone
} = require("../controller/product");

router.post("/addProduct", createProduct);
router.get("/getall",getAll);
router.get("/viewone",viewone);

module.exports = router;