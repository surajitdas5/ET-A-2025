import axios from 'axios';
import { useRef, useState } from 'react'
import EventCard from '../components/EventCard';
import { API } from '../util/constants';

const Search = () => {
    const searchRef = useRef()
    const [ events, setEvents ] = useState([])
    const [error, setError ] = useState("")

    const handleSubmit = async(e) => {
        setError("")
        e.preventDefault();
        let key = searchRef.current.value
        console.log(key)
        try{
            let data = await axios.get(`${API}/events/search?title=${key}`)
            setEvents(data.data)
        }catch(error){
            console.log(error)
            setError("No Event Found")
        }
    }
  return (
    <>
        <div className='row'>
            <div className="col-md-6 mx-auto">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="row g-1">
                        <div className="col-10">
                            <input ref={searchRef} className='form-control' type="text" placeholder='Search Event' required />
                        </div>
                        <div className="col-2">
                            <input className='btn btn-primary' type='submit' value="Search"  />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className='row g-2 mt-4'>
        {
            error.length > 0? (
                <p className='text-danger'>No Event Found</p>
            ) : (
                events.map(event => (
                    <div className="col-md-4" key={event._id}>
                        <EventCard event={event} />
                    </div>
                ))
            )
        }
        </div>
    </>
  )
}

export default Search

