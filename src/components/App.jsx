import React, {  useState } from 'react'
import AllShows from './AllShows'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Show from './Show';

const App = () => {
    var [data,setData]=useState({});
    function handleClick(value){
        setData(value);
        console.log(value);
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/QuadB' element={< AllShows handle={handleClick} />} />
                <Route path='/show' element={<Show data={data}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App