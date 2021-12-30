import React, { useEffect, useState } from 'react'

export default function TestApi() {
    const [items, setitems] = useState([])

    useEffect(() => {
        callAPI()
    },[])

    const callAPI = async () =>{
        const data =  await fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json())
        console.log(data,'this is the data of the post')
        setitems(data);   
    }

    return (
        <div>
            <div>
                <ul>
                {items.map((it)=> <li key={it.id}> {it.title} </li>)}
                </ul>
            </div>
        </div>
    )
}
