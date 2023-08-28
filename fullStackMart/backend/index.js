const express =require("express");
const app=express();
const mongoose =require("mongoose");
const cors=require('cors');

const authRoutes =require('./routes/authRoutes');




const URI ="mongodb+srv://kumardharmveer399:Dm9470121261@cluster0.l0m5grx.mongodb.net/";

// const mongoDb=async()=>{
//     await mongoose.connect("mongodb+srv://kumardharmveer399:Dm9470121261@cluster0.l0m5grx.mongodb.net/"
//     ,
//         console.log("mongoDb Connect Successfully"),
//         {
//             useNewUrlParser: true
//         })
// }

// mongoDb();

mongoose
     .connect( "mongodb://localhost:27017", { useNewUrlParser: true,  useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));


// app.get("/",(req,res)=>{
//     res.send("server running at 8000 port")
// })
app.use(cors());
app.use(express.json()); 

app.use('/api',authRoutes);

app.listen(8000,()=>{
    console.log(`server running at port 8000`)
})