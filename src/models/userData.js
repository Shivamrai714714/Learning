const mongoose = require("mongoose");

const userDataSchema = {

    name: {type:"string"},
    emailId:{type:"string"},
    age:{type:"string"},
    mobile:{type:"string"},
    friend:{
        type:"array",
        minItem:1,
        uniqueItem:true,
        item:{
            type:"object",
            required:[
                "fname",
                "fage",
                "fcontact"
            ],
            properties:{
                fname:{type:"string"},
                fage:{type:"string"},
                fcontact:{type:"string"}
            }
            
        }
    }


};

const UserData = new mongoose.model("userdata",userDataSchema);
module.exports = UserData;


