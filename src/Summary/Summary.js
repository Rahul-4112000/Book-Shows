import React, { useState } from 'react';
import './Summary.css';
import { IoIosStar } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom';

function Summary() {

    const [userDetails, setUserDetails] = useState({
        userName: '',
        totalSeats: 1
    });

    const [isFormVisible , setFormVisible] = useState(false);
    const [confirm, setconfirm] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const fillTicketDetails = (key) => (event) => {
        setUserDetails({ ...userDetails, [key]: event.target.value });
    }

    const booleanvalueHandler = (setValue, value) => {
        setValue(value)
    }

    const FillUserDetails = (booleanValue,cssProp) => {
        booleanvalueHandler(setFormVisible,booleanValue);
        document.querySelector('.summary-wrapper').style.filter  = cssProp;
        document.querySelector('.about-show').style.filter  = cssProp;
    }
    
    const { userName, totalSeats } = userDetails;
    const { state: show } = location;
    const { name, type, language, genres, status, runtime, schedule, rating, network, summary, image } = show;
    const { time, days } = schedule;

    const Summary = summary.replace( /(<([^>]+)>)/ig, '');

    const bookedTickets = (event) => {

        event.preventDefault();

        const userData = {
            movieName: name,
            movieDuration: runtime,
            movieTime: time + 'min',
            movieLanguage: language,
            uname: userName,
            seats: totalSeats,
        }

        localStorage.setItem('userData',JSON.stringify(userData));

        setFormVisible(false);
        setconfirm(true);
    }

    return (
        <div className='summary'>

            <div className='summary-wrapper'>
                <div className='detailed-show-image'>
                    <img src={image.medium} alt='show' ></img>
                </div>
                <div className='show-info'>
                    <h1 className='name'>{name}</h1>
                    <div className='network'>
                        <span className='bold'>Network:</span>
                        <span>{network.name}</span>
                    </div>
                    <div className='schedule'>
                        <span className='bold'>Schedule:</span>
                        {
                            days.map((day, index) => {
                                return (
                                    <span key={index}> {day} </span>
                                )
                            })
                        }
                        <span>at {time} &#40;{runtime} min&#41;</span>
                    </div>
                    <div className='type'>
                        <span className='bold'>Type:</span>
                        <span>{type}</span>
                    </div>
                    <div className='language'>
                        <span className='bold'>Language:</span>
                        <span>{language}</span>
                    </div>
                    <div className='genres'>
                        <strong className='bold'>Genres:</strong>
                        {
                            genres.map((genre, index) => {
                                return (
                                    <span key={index} > {genre} </span>
                                )
                            })
                        }
                    </div>
                    <div className='status'>
                        <span className='bold'>Status:</span>
                        <span>{status}</span>
                    </div>
                    <div className='rating'>
                        <span className='icon'><IoIosStar /></span>
                        <span className='value'>{rating.average}</span>
                    </div>

                    <div onClick={() => FillUserDetails(true,'blur(5px')} className='ticket-button'>Book Tickets</div>
                </div>
            </div>

            <div className='about-show'>
                <h1>About Show</h1>
                <div className='para'>{Summary}</div>
            </div>


            <form className={`${isFormVisible && 'form-style'}`} onSubmit={bookedTickets}>
                <h3>BOOKING SUMMARY</h3>
                <div>
                    <label>Show name :</label>
                    <input type='text' value={name}></input>
                </div>
                <div>
                    <label>Duration :</label>
                    <input type='text' value={runtime}></input>
                </div>
                <div>
                    <label>Time :</label>
                    <input type='text' value={time}></input>
                </div>
                <div>
                    <label>Language :</label>
                    <input type='text' value={language} ></input>
                </div>
                <div>
                    <label>Genres :</label>
                    <input type='text' value={genres}></input>
                </div>
                <div>
                    <label>Your name :</label>
                    <input className='user-field' type='text' required value={userName} onChange={fillTicketDetails('userName')}></input>
                </div>
                <div>
                    <label>Total seats</label>
                    <select onChange={fillTicketDetails("totalSeats")} >
                        <option defaultChecked value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                <input type='submit' value='Book Ticket'></input>
            </form>

            <div className={`confirm-palette ${confirm && 'style'}`} style={{transitionDelay:'500ms'}} >
                <span>Congratulations!!!</span>
                <span>Show has been booked</span>
                <div className='home-button'  onClick={ () =>  { FillUserDetails(false,''); navigate('/')  }  } >Go To Home</div>
            </div>
        </div>
    )

}

export default Summary
