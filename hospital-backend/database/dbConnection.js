import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: 'HOSPITAL_MANAGEMENT_SYSTEM_DEPLOYED'
    }).then(() => {
        console.log('connected to database!');  
    }).catch((error)=> {
        console.log(`error accrued while connecting to database ${error}`)
    })
}