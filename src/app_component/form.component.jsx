import React from 'react';
import  "./form.style.css"

const Form= props=>{
return(
    <div className="container">
        <div>{props.error? error():null}</div>
        <form onSubmit={props.loadweather}>
        <div className="row">
            <div className="col-md-3 offet-md-2">
                <input type="text"
                 className="form-control"
                  name="city"
                autoComplete="off"
                placeholder='city' />
                
        </div>
                <div className="col-md-3 py-2 mt-md-0 text-md-left"> 
                <button className="btn btn-warning">Get weather</button>
                </div>
               
            </div>

 
        </form></div>
       
)
};

function error(params) {
            return(

            <div className="alert alert-danger mx-5" role="alert">Please enter the city</div>
            )
}
export default Form