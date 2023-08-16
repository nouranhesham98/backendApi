const mongoose=require('mongoose');
const validator=require('validator')

const userSchema= new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
        trim:true // '         Omar                ' --> 'Omar'
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
    
       //npm i validator
       validate(value){
if(!validator.isEmail(value))
{
    throw new Error ('Email is invalid')
}
       }
    },
    age:{
        type:Number,
    }
})

export default mongoose.models.User || mongoose.model('User' ,userSchema)