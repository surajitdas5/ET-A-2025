import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API } from '../util/constants'

const EventDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ event, setEvent ] = useState({})
    const getEventDetails = async() => {
        try {
            let data = await axios.get(`${API}/events/${id}`)
            setEvent(data.data)
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

  return (
    <>
        <div className='row g-3'>
            <div className="col-md-6">
                <img src={event.eventImage} className='img-fluid w-100' />
            </div>
            <div className="col-md-6">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p className='my-0'><span className='fw-semibold'>Start Date: </span> {new Date(event.startDate).toLocaleDateString()}</p>
                <p className='my-0'><span className='fw-semibold'>End Date: </span> {new Date(event.endDate).toLocaleDateString()}</p>
                <div className="card">
                    <div className="card-body">
                        <p className="lead fw-bold">Coordinator Details</p>
                        <span className='d-block fw-semibold'>{event?.user?.name}</span>
                        <span className='d-block'>{event?.user?.mobile}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default EventDetails