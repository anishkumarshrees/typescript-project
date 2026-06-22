
import React from "react";
import Card from "./components/Card";

export default async function home(){
  const response = await fetch(`${process.env.BACKEND_URL}/notes`)
if(!response.ok){
    throw new Error('error occured while fetching')
}
 const {data:notes}=  await response.json()
 console.log(notes)
    return(
        <>
        <Card notes={notes} />
        </>
    )
}
