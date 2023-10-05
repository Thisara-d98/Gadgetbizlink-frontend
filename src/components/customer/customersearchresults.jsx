import React from 'react';
import Galaxys9 from '../../resources/images/galaxys9.jpg';
function Customersearchresults(){
    return(
        <div class ="row" style={{"margin-bottom":"200px","margin-top":"100px"}}>
            <div class="card text-center" style={{"width": "18rem"}}>
                
                <div class="card-body">
                    <h5 class="card-title">Shiva Phone store</h5>
                    <img class="card-img-top" src={Galaxys9} alt="mobilephone"/>
                    <h3 class="card-text">Samsung Galaxy S9</h3>
                    <a href="#" class="btn btn-dark">see details</a>
                </div>
            </div>

            <div class="card text-center" style={{"width": "18rem"}}>
                
                <div class="card-body">
                    <h5 class="card-title">Shiva Phone store</h5>
                    <img class="card-img-top" src={Galaxys9} alt="mobilephone"/>
                    <h3 class="card-text">Samsung Galaxy S9</h3>
                    <a href="#" class="btn btn-dark">see details</a>
                </div>
            </div>
        </div>
    )
}

export default Customersearchresults