const express = require("express");

const { newPayment, checkStatus, details } = require("../controller/paymentController");

const router = express.Router();

router.post("/", newPayment);
router.post("/status/:txnId", checkStatus);

router.post("/details", details);

module.exports = router;
