import { useState } from 'react'

function Second(){
    // let x = useState(10);
    // console.log(x);
    
    let [num, func] = useState(0);
    function handleClick(){
        func(num+1);
        console.log(`Button is clicked ${num} times`)
    }

    console.log("Rerendered...")

    return(
        <>
            <h2>{num}</h2>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default Second