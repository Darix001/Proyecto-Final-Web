import mongoose from "mongoose";

const DB_URI = "mongodb://mongo:3o17uKdUBlmFr3cQWq41@containers-us-west-116.railway.app:6994"

//connection


mongoose.set('strictQuery', true)
const db = mongoose.connect(
DB_URI,
{
keepAlive:true,
useNewUrlParser:true,
useUnifiedTopology:true,
},
(error) => {
    if (error){
        console.log('!Error,', error)
    }
    else{
        console.log('Conectado a la base de datos.')
    }
}
);

