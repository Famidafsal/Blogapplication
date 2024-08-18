const mongoose=require('mongoose')
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
const model=mongoose.model('custer',schema);
module.exports=model;
