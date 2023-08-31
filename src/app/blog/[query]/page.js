"use client"
import { useEffect,useState } from "react"
export default function getquery({params}){



    const [data2, setData2] = useState("")


    const fetchInfo = async () => {
        return await fetch('https://jsonplaceholder.typicode.com/posts/')
          .then((res) => res.json())
          .then((d) => setData2(d))
      }
    
      useEffect( () => {
        fetchInfo();
       }, []);


    console.log;
    const p = (data2[(parseInt(params.query)+1)])
    if(p!==undefined)
    console.log(p.title)
    return (
        <div>
            {(p!==undefined)?p.title:""}
        </div>
    )
}