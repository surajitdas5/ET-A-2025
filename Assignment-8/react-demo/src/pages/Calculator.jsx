import { useState, useRef } from "react";

function Calculator(){
    const numOneRef = useRef(null);
    const numTwoRef = useRef(null);
    const [sum, setSum ] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(numOneRef.current.value);
        let a = numOneRef.current.value
        let b = numTwoRef.current.value
        if(a === "" || b === ""){
            alert("Please enter both the numbers")
            return
        } else if(isNaN(a) || isNaN(b)){
            alert("Please enter valid numbers")
            return
        }
        a= Number(a)
        b= Number(b)
        setSum(a+b)
        numOneRef.current.value = ""
        numTwoRef.current.value = ""
    }
    return(
        <div className="row">
            <div className="col-md-4 mx-auto my-4">
                <h1>Add Two Numbers</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <input 
                        ref={numOneRef} 
                        type="text" 
                        className="form-control mb-2" 
                        name="num1" 
                        placeholder="First Number" 
                    /> 
                    <input
                        ref={numTwoRef}
                         type="text" 
                         className="form-control mb-2" 
                         name="num2" 
                         placeholder="Second Number" 
                    /> 
                    <input type="submit" value="ADD" className="btn btn-primary my-2" />
                </form>
                <h4>{sum}</h4>
            </div>
        </div>
    )
}

export default Calculator;