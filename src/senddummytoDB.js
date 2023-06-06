const dummyReportData = require("./constant/dummyReportdata");
const userReport = require("./models/userReport");

const dummyProjectData = require("./constant/dummyProjectdata");
const userProject = require("./models/userProject");

const senddummydatatoDB = async () => {
  try {
    console.log("1 try catch block ");
    await userReport.deleteMany({});
    const fakeData2 = await userReport.insertMany(dummyReportData);
    console.log("After sending 2 the mock data to database");
    console.log(fakeData2);

    await userProject.deleteMany({});
    const fakeData3 = await userProject.insertMany(dummyProjectData);
    console.log("After sending 3 the mock data to database");
    console.log(fakeData3);
  } catch (error) {
    console.log(error);
  }
};

module.exports = senddummydatatoDB;
