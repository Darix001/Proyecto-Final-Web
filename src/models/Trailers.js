import { Schema, model } from "mongoose";

const trailerschema = new Schema({
    titulo:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    año:{
        type:Date,
    },
    director:{
        type:String,
    },
    actores:{
        type:Array,
    },
    reseña:{
        type:String,
    },
    imagen_de_portada:{
        data:Buffer,
        contentType:String
    },
    link_del_trailer:{
        type:String,
        trim:true,
    }

}, {
    versionKey:false,
})

const Trailers = model('Trailers', trailerschema)
export default Trailers
module.exports = Trailers;