import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllShows = (props) => {
    var [data, setData] = useState([]);
    
    function handleClick(e) {
        const index = e.target.getAttribute('index');
        props.handle({index,data});
        console.log(data[index]);
        
        localStorage.setItem("data",JSON.stringify(data[index].show))
    }

    function createCard(element, index) {
        return (<div key={element.show.id} index={index} className='showCard'>

            <img src={element.show.image.medium} alt={element.show.name} />
            <div>

                <h1>{element.show.name}</h1>
                <p><span>Language: </span>{element.show.language}</p>
                <p><span>Type: </span>{element.show.type}</p>
                <p><span>Genres: </span>{element.show.genres.map(function (x) {
                    return <span> {x} </span>
                })}</p>

                <Link to='/show'>
                    <button index={index} onClick={handleClick}>Show More</button>
                </Link>
            </div>
        </div>);
    }
    useEffect(function () {
        fetch('https://api.tvmaze.com/search/shows?q=all').then(response => response.json()).then(function (json) {
            setData(json)
        });

    }, [])
    return (<>

        <div className='container'>
            <h1>TV Shows</h1>
            <div className='resultsArea'>
                {data.map(createCard)}
            </div>
        </div>
    </>
    )
}

export default AllShows