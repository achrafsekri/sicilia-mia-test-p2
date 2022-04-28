const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const Api = require("./api.js");
var cors = require("cors");
app.use(cors());

const mongodb =
  "mongodb+srv://achraf:96079422@cluster0.pkvoq.mongodb.net/apis?retryWrites=true&w=majority";

mongoose
  .connect(mongodb)
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

// -- only ran it onece to store the data in mogodb --

// run()

// async function run(){
//   axios.get('https://api.publicapis.org/entries',{"API":"", "Description":"", "Link":"", "Category":""}).then(response=>{
//         response.data.entries.map(data=>{
//           Api.create({
//             api:data.API,
//             Description:data.Description,
//             Link:data.Link,
//             Category:data.Category
//           },(error, sucess) => {if(error){
//             return console.log(error);
//              }}
//                 )}
//         )}).catch(error=> {
//     console.log(error);
//   })
//   }

//--this can fetch data from mongodb and return it on /all-apis--

// app.get('/all-apis',(req,res)=>{
//   Api.find({}).then(data=>{
//     res.send(data)
//   })
// })

// -- I prefer to fetch data from api and directly send it to front end since fetching it from mangodb takes too long because
//    I am using a free cluster --

app.get("/all-apis", (req, res) => {
  axios
    .get("https://api.publicapis.org/entries", {
      API: "",
      Description: "",
      Link: "",
      Category: "",
    })
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(4000);
