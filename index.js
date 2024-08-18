const express = require("express");
const cors = require("cors");
require('./connection');
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());



app.post('/post',async(req,res)=>{
  try {
    var item=req.body;
    const data_add=new courseModel(item);
    const data=await data_add.save();
    res.send('Post successful')  
  } catch (error) {
      console.log(error)
      
  }
})
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
