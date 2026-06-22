import type { Request, Response, NextFunction } from "express";

import multer = require("multer")
import noteModel = require("./noteModel")
import envConfig = require("../config/config");
import globalErrorHandler = require("../middleware/globalErrorHandler");
import createHttpError = require("http-errors");
import create = require("./noteModel");



const createNote=async(req:Request,res:Response,next:NextFunction)=>{
try{
    
createHttpError(500,"something went wrong")
 const file = req.file ? `${envConfig.backendurl}/uploads/${req.file.filename}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdn5ODMa1UxSL5a172LJpZn6EjIX5THCdmA&s"

 const {title,subtitle,description}=req.body 

 if(!title || !subtitle ||!description){
    res.status(400).json({
        message:"please provide all information"
    })
    return
 }
await noteModel.create({
     title,
     subtitle,
     description,
     file
})
res.status(201).json({
    message:"note created"
})
    }
    catch(error){
        console.log(error)
       return next(createHttpError(500,'error while creating'))
    }}

    const listNotes=async(req:Request,res:Response,next:NextFunction)=>{
        try{
            
        const notes =  await noteModel.find()
       
        res.status(200).json({
            message:"notes fetched",
            data:notes
          
        })
        }catch(error){
            console.log(error)
            return next (createHttpError(500,"error while fetching"))
        }
    }
     const deleteNotes=async(req:Request,res:Response,next:NextFunction)=>{
        try{
            const {id}=req.params
        if(!id){
            return next(createHttpError(400,"id is required"))
        }
        await noteModel.findByIdAndDelete(id)
        res.status(200).json({
            message:"notes deleted"
        })
        }catch(error){
            console.log(error)
            return next (createHttpError(500,"error while fetching"))
        }
    }
     const listNote=async(req:Request,res:Response,next:NextFunction)=>{
        try{
            const {id}=req.params
        const note = id ? await noteModel.findById(id) : await noteModel.findById()
        if(!note){
            return next(createHttpError(404,"note not found with that id"))
        }
        res.status(200).json({
            message:"notes fetched",
            data:note
          
        })
        }catch(error){
            console.log(error)
            return next (createHttpError(500,"error while fetching"))
        }
    }

    export = {createNote,listNotes,deleteNotes,listNote}