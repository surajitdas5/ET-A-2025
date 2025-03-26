import { useState } from 'react'

function Second(){
    // let x = useState(10);
    // console.log(x);
    
    // let [num, func] = useState(0);
    let [num, setNum] = useState(0);
    let [ visible, setVisible ] =useState(true)
    function handleClick(){
        // func(num+1);
        setNum(num+1)
        console.log(`Button is clicked ${num} times`)
    }

    function toggleVisibility(){
        setVisible(!visible)
    }

    console.log("Rerendered...")

    return(
        <>
            <h2>{num}</h2>
            <button onClick={handleClick}>Click</button>
            <br />
            {/* {
                visible ? (
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum reprehenderit sunt magnam saepe aspernatur sed! Aspernatur deserunt ipsum vitae tempora, unde temporibus asperiores impedit quod sequi, harum reprehenderit quae.</p>
                ) : (
                    ""
                )
            } */}
            {
                visible &&  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum reprehenderit sunt magnam saepe aspernatur sed! Aspernatur deserunt ipsum vitae tempora, unde temporibus asperiores impedit quod sequi, harum reprehenderit quae.</p>
            }
            <button onClick={toggleVisibility}>
                { visible ? 'Hide' : 'Show' }
            </button>
        </>
    )
}

export default Second