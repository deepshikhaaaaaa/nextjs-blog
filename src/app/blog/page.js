 "use client"
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function apicheck(){

const [data, setData] = useState("")


const fetchInfo2 = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect( () => {
    fetchInfo2();
   }, []);
   var url;
//   console.log(data[0].title)
  return (
    <div>
    {/* <h1>hi</h1> */}
        {Object.values(data).map((obj,index)=>{
            console.log(obj)
url='/blog/'+index;
console.log(url)
return (
  <Link href={url}><p >{obj.title}</p></Link>
)
        })}
    </div>
  )
}