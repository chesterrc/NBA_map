import { useEffect, useState } from "react";
//leaflet map
//import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const AmericaMap = () => {

    const [TeamCoords, setTeamCoords] = useState(null);
    const [searchInput, setSearchInput] = useState("");

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

    //call backend to fetch cities of US
    async function searchCity(url="http://localhost:5000/map/cities", data={ city }){
        const response = await fetch(url, {
            method: "GET",
            body: JSON.stringify(data),
        })
    }

    //handler to read changes in the search bar
    const handleChange = async (e) => {
        e.preventDefault();
        searchCity(data= e.target.value).then((city)=>{
            console.log(city);
        });
    };

    //function to check if someone has searched a city
    if (searchInput.length > 0){
        //pair to database
    }

    return (
        <div className="map">
            <div className="search-bar">
                    <input type="text" placeholder="Search an American City"
                    onChange={handleChange} value={searchInput} />
            </div>
            <MapContainer center={[35.00, -95.07]} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {TeamCoords && TeamCoords.map((coord) => (
                    //display each coordinate and send to map it
                    <Marker key={coord._id} position={[coord.Latitude, coord.Longitude]}>
                        <Popup>
                            <ul key={coord.Team}>Team: {coord.Team}</ul>
                            <ul key={coord.City}>City: {coord.City}</ul>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default AmericaMap