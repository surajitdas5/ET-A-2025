import axios from 'axios'
import React, { useRef, useState } from 'react'
import { API } from '../util/constants'
import { useAuth } from '../context/AuthContext'

const AddEvent = () => {
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const { token } = useAuth()

    const titleRef = useRef()
    const descriptionRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const linkRef = useRef()
    const eventImageRef = useRef()

    const handleSubmit = async(e) => {
        e.preventDefault();
        setMessage("")
        setLoading(true)

        let title = titleRef.current.value
        let description = descriptionRef.current.value
        let startDate = startDateRef.current.value
        let endDate = endDateRef.current.value
        let link = linkRef.current.value
        let eventImage = eventImageRef.current.files[0]
        
        
        const eventData = new FormData()
        eventData.append('title', title)
        eventData.append('description', description)
        eventData.append('startDate', startDate)
        eventData.append('endDate', endDate)
        eventData.append('link', link)
        eventData.append('eventImage', eventImage)

        // console.log(eventData)
        try{
            let data = await axios.post(`${API}/events`, eventData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(data)
            setMessage("Event Added")

            titleRef.current.value = ""
            descriptionRef.current.value = ""
            startDateRef.current.value = ""
            endDateRef.current.value = ""
            linkRef.current.value = ""
            // eventImageRef.current.files[0] = ""
        } catch(error){
            console.log(error)
            setMessage("Event not added")
        }
        setLoading(false)
    }

  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Add Event</h3>
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
                        Event Banner
                        <input ref={eventImageRef} type='file' className='form-control mb-2' />
                        {
                            !loading  && <input type='submit' value="Add Event" className='btn btn-primary' />
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEvent