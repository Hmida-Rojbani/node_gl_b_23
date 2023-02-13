const mongoose = require('mongoose');
//url local : mongodb://localhost:27017/gl-b-23
mongoose.connect('mongodb+srv://user:1234@db.mhbax.mongodb.net/gl-b-23?retryWrites=true&w=majority')
.then(()=>console.log('MongoDB is connected'))
.catch(err=>console.error('MongoDB not connected, error : ',err));