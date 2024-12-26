const{model,Schema}=require('../connection');
const mySchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    phNo:{type:Number,required:true},
    message:{type:String,required:true},
    
    
});
module.exports=model('cont',mySchema);