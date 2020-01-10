import React from 'react';
import "./weather.style.css"

const Weather=(props)=>{
    return(

        <div className='container text-light'>
            <div className='cards pt-4'>
                <h1>{props.city}
                </h1>
                <h5 className='py-4'>
                <i className={`wi ${props.weathericon} display-1`}/>
                </h5>{props.temp_celsius?
                (<h1 className='py-2'>  {props.temp_celsius}&deg; </h1>):null}
                {minMaxTemp(props.temp_min,props.temp_max)}
                <h4 className='py-3'> {props.description}</h4>
            </div>
        </div>
    )
}

function minMaxTemp(min,max){
    if (max && min) {return(
    <div>
        <span className='px-4'>{min}&deg;</span>
        <span className='px-4'>{max}&deg;</span>
    </div>
    )}
}

export default Weather;