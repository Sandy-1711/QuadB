import React, { useEffect, useState } from 'react'
const Show = (props) => {
    var [showData,setShowData]=useState(JSON.parse(localStorage.getItem('data')));
    useEffect(function(){
        var data=JSON.parse(localStorage.getItem('data'));
        setShowData(function(){
            return data;
        });
        console.log(showData);
    },[])
    
    var [showForm, setForm] = useState(false);
    var [formData, setFormData] = useState({
        name: "",
        date: "",
        email: "",
        number: "",

    })
    
    function handleClick(e) {
        e.preventDefault();
        setForm(true);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setForm(false);
        setFormData({name:"",email:"",date:"",number:""})

    }
    function handleChange(e) {
        const { value, name } = e.target;
        setFormData(function (prevvalue) {
            return {
                ...prevvalue,
                [name]: value
            };
        });
    }
    return (
        <div className='showContainer'>
            <div className='showImage'>
                <img src={showData.image.original} alt={showData.name} />
            </div>
            <div className='showInfo'>
                <h1>{showData.name}</h1>
                <p><span>Type </span>{showData.type}</p>
                <p><span> Genres </span>{showData.genres.map(function (x,index) {
                    return <p key={index}>{x} </p>
                })}</p>
                <span >Summary</span>
                <div dangerouslySetInnerHTML={{ __html: showData.summary }}></div>
                {!showForm && <button onClick={handleClick}>Book Tickets</button>}
            </div>
            {showForm && <form>
                <input onChange={handleChange} value={formData.name} type='name' id='name' name='name' placeholder='name' />
                <input onChange={handleChange} value={formData.email} type='email' id='email' name='email' placeholder='email' />
                <input onChange={handleChange} value={formData.number} type='number' id="number" name='number' placeholder='number of seats' />
                <input onChange={handleChange} value={formData.date} type='date' id='date' name='date' />
                <button onSubmit={handleSubmit}>Book Now</button>
            </form>}
        </div>
    )
}

export default Show