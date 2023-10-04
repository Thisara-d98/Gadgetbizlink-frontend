import React, {useState,useEffect}  from 'react'

function UseEffectDemo(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`the count is ${count}`;
    },[count]);

    return (
        <div>
            <button onClick={()=>setCount(count+1)} >Click me</button>
            <h1>The count is {count}</h1>
        </div>


    )
}

export default UseEffectDemo