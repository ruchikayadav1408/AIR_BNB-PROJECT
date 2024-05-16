const mongoose= require("mongoose");
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
const Listing= require( "../models/listing.js");
const initData= require("./data.js");

main()
.then(()=>{
    console.log("connect to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB= async()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({
        ...obj, 
        owner:"6641f8b7258958c432fd1f70",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();