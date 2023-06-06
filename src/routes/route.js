const express = require('express');
const router = express.Router();
const userReports = require('../models/userReport'); 


router.get('/reports/:emailId', async (req, res) => {
  try{

    const emailId = req.params.emailId;

    console.log(emailId);
    console.log("ayush");
  
    
    const reports = await userReports.findOne({ emailId: emailId }).exec();
  
    if (reports.length === 0) {
      return res.status(404).json({ error: 'User reports not found' });
    }
    
    console.log(reports);
    
    res.status(200).json(reports);

  }catch (e) {
    console.log(e);
  }
  
});

module.exports = router;
