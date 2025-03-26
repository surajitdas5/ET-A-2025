import { useRef } from 'react'

const StudentAdd = ({ addStudent }) => {
    const rollRef = useRef(null)
    const nameRef = useRef(null)
    const cgpaRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        let roll = rollRef.current.value
        let name = nameRef.current.value
        let cgpa = cgpaRef.current.value
        // let newStudent = {
        //     "roll": roll,
        //     "name": name,
        //     "cgpa": cgpa
        // }
        let newStd = { roll, name, cgpa}
        addStudent(newStd)
        rollRef.current.value = ""
        nameRef.current.value = ""
        cgpaRef.current.value = ""
    }

  return (
    <div className='my-3'>
        <form method="post" onSubmit={handleSubmit}>
            <div className="row g-2">
                <div className="col-md-3">
                    <input ref={rollRef} className='form-control' type='text' name='roll' placeholder='Roll' required />
                </div>
                <div className="col-md-3">
                    <input ref={nameRef} className='form-control' type='text' name='name' placeholder='Name' required />
                </div>
                <div className="col-md-3">
                    <input ref={cgpaRef} className='form-control' type='text' name='cgpa' placeholder='CGPA' required />
                </div>
                <div className="col-md-3">
                    <input className='form-control btn btn-primary' type='submit' value="ADD" />
                </div>
            </div>
        </form>
    </div>
  )
}

export default StudentAdd