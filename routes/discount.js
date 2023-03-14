const express = require("express");
const router = express.Router();

const {
    calcDiscount,addCart,getNewDiscount
} = require("../controller/discount");

router.put("/calDiscount", calcDiscount);
router.post("/addCart", addCart);
router.get("/newdiscount", getNewDiscount);

module.exports = router;