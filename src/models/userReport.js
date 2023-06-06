const mongoose = require("mongoose");

const userReportSchema = {
  Name_of_Mentee: { type: "string" },
  Email_ID: { type: "string" },
  Mentor_Name: { type: "string" },
  Mentor_Email_ID: { type: "string" },
  Overall_Assessment: { type: "string" }, //(100%)
  Attendance_Participation: { type: "string" }, //(0-4)
  Time_Management: { type: "string" }, //(0-4)
  Comm_Skills: { type: "string" }, //(0-4)
  Performance_in_Assignments: { type: "string" }, //(Out of 10)
  Remarks: { type: "string" },
  type: { type: "string" },
  week_number: { type: "string" },
};

const UserReport = new mongoose.model("reports", userReportSchema);
module.exports = UserReport;
