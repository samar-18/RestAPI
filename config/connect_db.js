const mongoose = require('mongoose');

const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false })
    .then(res=>{console.log('data base is connected')})
    .catch(err=>res.send(err.message))
}
module.exports=connectdb