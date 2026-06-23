// 'use client'
import { Note } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card=({notes}:{notes:Note[]})=>{
   
    return(
        <>
        
<div className="flex px-3 py-3 mt-[70px] space-x-50">
    {
        notes.map((note)=>{
            // Extract filename from full URL if it contains http
            const imageUrl = note.file.includes('http') 
              ? note.file 
              : `http://localhost:4000/uploads/${note.file}`
            
            return(
               <div className="max-w-sm rounded overflow-hidden shadow-lg" key={note._id}>
           <Image
            src={imageUrl}
            alt={note.title}
            width={400}
            height={200}
            unoptimized
          />
           
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{note.title}</div>
                <p className="text-gray-700 text-base">
                    {note.subtitle}
                </p>
            </div>
            <Link href={`/note/${note._id}`}>Read More</Link>
        </div>
            )
        })
    }
</div>

        </>
    )
}

export default Card