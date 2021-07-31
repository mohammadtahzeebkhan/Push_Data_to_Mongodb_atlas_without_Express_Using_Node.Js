import mongoose from 'mongoose';

URL="mongodb+srv://user:pass123@cluster0.dyvx5.mongodb.net/myfirstdatabase?retryWrites=true&w=majority"
const userschema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:Number,
    _id:Number,
});

const v={
    name:'paradisehope',
    username:'khanbhaibest',
    email:'khanbhaibest@gmail.com',
    phone:8004813253,
    _id:1,
    };
    
mongoose.connect(URL,{useNewUrlParser:true,useUnifieldTopology:true,useFindAndModify:false}).then(()=>{
    console.log('AFTER run mongoose.connect INside INDEX.js');

});


const user=mongoose.model('myfirstdatabase',userschema);

const newuser=new user(v);
newuser.save();
console.log('AFTER run NEWUSER.save INside INDEX.js');
