import { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'
import { API } from '../util/constants'

const Home = () => {
    const [ events, setEvents ] = useState([])
    const getEvents = async() => {
        try {
            let data = await axios.get(`${API}/events`)
            // console.log(data.data);
            setEvents(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getEvents()
    }, [])
  return (
    <div className='row g-2'>
        {
            events.map(event => (
                <div className="col-md-4" key={event._id}>
                    <EventCard event={event} />
                </div>
            ))
        }
    </div>
  )
}

export default Home