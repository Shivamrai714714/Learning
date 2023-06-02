const dummyData = require('./constant/dummydata')
const userData= require('./models/userData')

const senddummydatatoDB = async()=>{
try {
    //to delete the previous set of data from MongoDB database, otherwise redundancy occures
await userData.deleteMany({});
const fakeData = await userData.insertMany(dummyData);
console.log("After sending the mock data to database");
console.log(fakeData);


} catch (error) {
    console.log(error);
    console.log(error.message);
}


}

module.exports=senddummydatatoDB;