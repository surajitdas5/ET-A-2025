import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { API } from '../util/constants'
import { useAuth } from '../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import { formatDate } from '../util/helperFunctions'

const UpdateEvent = () => {
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const { token } = useAuth()
    const navigate = useNavigate()
    const { id } = useParams()
    const [ event, setEvent ] = useState({})

    const titleRef = useRef()
    const descriptionRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const linkRef = useRef()
    const statusRef = useRef()

    const getEventDetails = async() => {
        try {
            let data = await axios.get(`${API}/events/${id}`)
            setEvent(data.data)
            let event = data.data
            titleRef.current.value = event.title
            descriptionRef.current.value = event.description
            startDateRef.current.value = formatDate(event.startDate)
            endDateRef.current.value = formatDate(event.endDate)
            linkRef.current.value = event.link ?  event.link : ""
            statusRef.current.value = event.status

        } catch (error) {
            console.log(error);
            if(error.status === 400){
                alert("Invalid Id")
            }
            navigate("/")
        }
    }

    useEffect(()=>{
        getEventDetails()
    }, [id])

    const handleSubmit = async(e) => {
        e.preventDefault();
        setMessage("")
        setLoading(true)

        let title = titleRef.current.value
        let description = descriptionRef.current.value
        let startDate = startDateRef.current.value
        let endDate = endDateRef.current.value
        let link = linkRef.current.value
        let status = statusRef.current.value
        
        let eventData = {title, description, startDate, endDate, link, status}

        // console.log(eventData)
        try{
            let data = await axios.put(`${API}/events/${event._id}`, eventData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            console.log(data)
            setMessage("Event Updated")
        } catch(error){
            console.log(error)
            setMessage("Event not updated")
        }
        setLoading(false)
    }

  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Update Event</h3>
                    <p>{message}</p>
                </div>
                <div className="card-body">
                    <form method="post"  onSubmit={handleSubmit}>
                        Event Title
                        <input ref={titleRef} type='text' className='form-control mb-2' required />
                        Description
                        <textarea ref={descriptionRef} rows={5} className='form-control mb-2' required></textarea>
                        Start Date
                        <input ref={startDateRef} type='date' className='form-control mb-2' required />
                        End Date
                        <input ref={endDateRef} type='date' className='form-control mb-2' required />
                        Link (Optional)
                        <input ref={linkRef} type='text' className='form-control mb-2' />
                        Event Status
                        <select ref={statusRef} className='form-control mb-3 required'>
                            <option value="">--select---</option>
                            <option value="active">Active</option>
                            <option value="completed">Completed</option>
                            <option value="canceled">Canceled</option>
                        </select>
                        {
                            !loading  && <input type='submit' value="Update Event" className='btn btn-primary' />
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateEvent