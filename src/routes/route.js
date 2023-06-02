const express = require("express");
const router = express.Router();
const userData = require("../models/userData");

router.get("/", async (req, res) => {
  try {
    res.status(200).send("Hi Shivam How are u");
  } catch (error) {
    console.log(error);
  }
});

router.get("/report/:emailId", async (req, res) => {
  try {
    //Will come back here
    const emailId = req.params.emailId;
    console.log(emailId);
    const userData= await userData.findOne({emailId:emailId});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
