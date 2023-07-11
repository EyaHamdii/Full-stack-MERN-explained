const express = require("express")
const app = express();
PORT= 8000 ;
// importing cors after installing it (npm i cors)
const cors=require("cors")

// ? after creating the .env file
// import the dotenv library and a method called config(it's the place where all of our sinsitive info will be putted in)
require('dotenv').config();

// * this will contain my hidden port
// const port = process.env.PORT

//? MIDDLE WEAR ==========================================
// express doesn't understand json this will help
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// allowing cors
app.use(cors())
// // if we write this :" app.use(cors())" we gived access to everything to enter our server instead do this:
// app.use(cors({
//     // *here were allowing any request coming from port 3000 to our port
//     origin: "http://localhost:3000",
//     // * inside the method we write the thing we're allowing the port 3000 to do 
//     methods:["GET","POST"]
// }))
// ? =====================================================

// IMPORTING OUR ROUTES:

require("./Config/mongoose.config")
require("./routes/hero.route")(app)

app.listen(PORT, ()=>
console.log(`Server is locked and loaded on port${PORT} 🚀!`)
)