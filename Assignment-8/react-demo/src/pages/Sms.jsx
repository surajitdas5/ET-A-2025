import { useState} from 'react'
import StudentAdd from '../components/StudentAdd'
import StudentDisplay from '../components/StudentDisplay'

const Sms = () => {
    const [ students, setStudents ]= useState([])
    const addStudent = (student) => {
        setStudents([...students, student])
    }
    const deleteStudent = (roll) => {
        let newStudents = students.filter( s => s.roll != roll)
        setStudents(newStudents)
    }
  return (
    <div className='row my-2'>
        <div className="col-md-8 mx-auto">
            <h2 className='text-center'>Manage Your Student Data</h2>
            <StudentAdd addStudent={addStudent} />
            <StudentDisplay students={students} deleteStudent={deleteStudent} />
        </div>
    </div>
  )
}

export default Sms