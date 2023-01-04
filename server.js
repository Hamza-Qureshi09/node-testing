const express = require("express")
const app = express()
const Port = process.env.PORT || 7000;
require("dotenv").config({ path: './.env' })
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true }).then((data) => { console.log(`connection to Database is successfull ${data.version}`); })
// mongoose.connect('mongodb://127.0.0.1:27017/FlutterApiTesting', { useNewUrlParser: true }).then((data) => { console.log(`connection to Database is successfull ${data.version}`); })

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`server is shutting down due to handling uncaught exception`);

    process.exit(1)
})


app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'30mb',}))
app.disable('x-powered-by');


const router=require("./router/routes")
app.use("/notes",router); 



const server = app.listen(Port, () => {
    console.log(`server is running on port ${Port}`);
})


//  unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`server is shutting down due to unhandled promise rejection`);

    server.close(() => {
        process.exit(1)
    })
}) 