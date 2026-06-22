
import mongoose = require("mongoose");
import type { Note } from "./noteType";


const noteSchema=new mongoose.Schema<Note>({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,

    },
    description:{
        type:String,
        required:[true,"description"]
    },
    file:{
        type:String
    }
})

export  = mongoose.model<Note>("Note",noteSchema)