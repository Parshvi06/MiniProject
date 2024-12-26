const{model,Schema}=require('../connection');
const mySchema = new Schema({
    breed:{type:String,required:true},
    type:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    state:{type:String,required:true},
    contact_name:{type:String,required:true},
    phone:{type:String,required:true},
    image:{type:String,required:true},
});
module.exports=model('pets',mySchema);