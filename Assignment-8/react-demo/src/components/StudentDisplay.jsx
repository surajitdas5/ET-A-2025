import React from 'react'

const StudentDisplay = ({ students, deleteStudent }) => {
  return (
    <div className='table-responsive'>
        <table className='table table-bordered border-primary'>
            <thead className='text-center'>
                <tr>
                    <th>Roll</th>
                    <th>Name</th>
                    <th>CGPA</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map( student => (
                        <tr key={student.roll}>
                            <td>{student.roll}</td>
                            <td>{student.name}</td>
                            <td>{student.cgpa}</td>
                            <td className='text-center'>
                                <button 
                                className='btn btn-sm btn-danger' 
                                onClick={()=>deleteStudent(student.roll)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default StudentDisplay