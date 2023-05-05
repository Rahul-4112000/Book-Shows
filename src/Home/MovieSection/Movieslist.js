import React, { useState } from 'react';
import './Movieslist.css';
import { RiStarHalfSFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

function Movieslist({ showlist, showCategory }) {

    const navigate = useNavigate();

    const [showVisible, setShowVisible] = useState(6);

    const stateHandler = (setState, value) => {
        setState(value);
    }

    return (
        <section>

            <h1>{showCategory} Shows</h1>

            <div className='shows'>

                {
                    showlist.map((Show, index) => {

                        const { image, language, name, rating, runtime } = Show;


                        return (

                            index < showVisible &&

                            <div className='show-container' key={index}>

                                <div className='show-image' onClick={() => { navigate('/summary',{state:Show}) } }>
                                    <img alt='show' src={image.medium}></img>
                                    <div className='rating'>
                                        <span className='rating-icon'><RiStarHalfSFill /></span>
                                        <span className='rating-value'>{rating.average}</span>
                                    </div>
                                </div>

                                <div className='show-content'>

                                    <div className='name'>{name}</div>

                                    <div className='runtime'>{runtime} min</div>

                                    <div className='rating-lang'>
                                        <span className='language'>{language}</span>
                                    </div>

                                </div>

                            </div>

                        )
                    })
                }
            </div>

            <div className='show-more'>
                {
                    showVisible === 6 ?
                        <span onClick={() => stateHandler(setShowVisible, 12)}>See more shows  </span>
                        :
                        <span onClick={() => stateHandler(setShowVisible, 6)}>See less</span>
                }
            </div>

        </section>
    )
}

export default Movieslist
