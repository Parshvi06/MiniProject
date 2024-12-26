const mongoose = require('mongoose');
const url = "mongodb+srv://trueliving1106:parshvi06@cluster0.cwdq4.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=cluster0"

//connect to the database



mongoose.connect(url)
.then((result) => {
    console.log('connected to database ');
    
})
.catch((err) => {
    console.log(err);

    
});

module.exports= mongoose;