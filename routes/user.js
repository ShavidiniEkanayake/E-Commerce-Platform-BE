const express = require("express");
const router = express.Router();

const {
    addUser,insertPassword
} = require("../controller/user");

router.post("/addUser", addUser);
router.post("/insertpassword", insertPassword);


module.exports = router;