const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://famida_12ac:heather12ac@cluster0.xgkqmzu.mongodb.net/ClusterretryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
