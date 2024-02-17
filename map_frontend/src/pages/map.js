import { useEffect, useState } from "react"

const AmericaMap = () => {

    const [TeamCoords, setTeamCoords] = useState(null)

    //call backend to grab NBA team data
    useEffect(() => {
        const fetchTeamcoords = async () => {
            const response = await fetch('http://localhost:5000/map/')
            const json = await response.json()

            //check response
            if (response.ok){
                console.log('response is ok')
                setTeamCoords(json)
            }
        }

        fetchTeamcoords()
    }, [])

    //pin NBA team data to map
    useEffect(() => {
        
    })
    return (
        <div className="home">
            <div className="TeamCoords">
                {TeamCoords && TeamCoords.map((coord) => (
                    //display each coordinate and send to pinMap function
                    <li key={coord._id}>
                        <ul key={coord.Team}>{coord.Team}</ul>
                        <ul key={coord.City}>{coord.City}</ul>
                        <ul key={coord.Latitude}>{coord.Latitude}</ul>
                        <ul key={coord.Longitude}>{coord.Longitude}</ul>
                    </li>
                )
                )
                }
            </div>
        </div>
    )
}

export default AmericaMap