import { useState, useEffect } from "react"
import { PlaceList } from "./PlaceList"
import { SearchPlaces } from "./SearchPlaces"
import './location.css'


export const LibrarySearch = () => {
    const [libraries, setLibraries] = useState()
    const [location, setLocation] = useState('')
    console.log(libraries)
    console.log(location)


    //Responsible for what happens when a location is typed into the input
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'fsq33BQnf+4FWQJzJXB3w1JWHhdJtCJVzsX2Q7URt+vH3DI='
        }
    };


    const fetchPlaces = (e) => {
        e.preventDefault()

        fetch(`https://api.foursquare.com/v3/places/search?query=library&fields=name%2Clocation&near=${location}&sort=DISTANCE&limit=10`, options)
            .then(response => response.json())
            .then((libraryArray) => {
                setLibraries(libraryArray.results)
            })

    }

    useEffect(
        () => {

        },
        [location, libraries]
    )

    if (libraries) {
        return (
            <>
                <div className="librarySearchBox">
                    <SearchPlaces
                        handleLocation={handleLocation}
                        fetchPlaces={fetchPlaces} />

                    <PlaceList libraries={libraries} />
                </div>
            </>
        )
    } else {
        return (
            <div className="librarySearchBox">
                <SearchPlaces
                    handleLocation={handleLocation}
                    fetchPlaces={fetchPlaces} />
            </div>
        )
    }
}