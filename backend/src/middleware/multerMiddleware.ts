
import type{Request} from "express"
import multer = require("multer");

const storage = multer.diskStorage({
    destination:function(req:Request,file:Express.Multer.File,cb:any){
        cb(null,"./src/uploads")
    },
    filename:function(req:Request,file:Express.Multer.File,cb:any){
        cb(null,Date.now() + "-" + file.originalname)
    }
})

const upload = multer({storage})

export = upload