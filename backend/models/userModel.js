const{model,Schema}=require('../connection');
const mySchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    // confirmpassword:{type:String,required:true}
    
});
module.exports=model('userLog',mySchema);