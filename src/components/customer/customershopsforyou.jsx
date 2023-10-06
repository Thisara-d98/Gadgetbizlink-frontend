import React from 'react';
import Galaxys9 from '../../resources/images/galaxys9.jpg';
import Mobileshopvec from '../../resources/images/mobileshopvec.jpg';
import Toysshopvec from '../../resources/images/toyshopvec.jpg';
import Customerviewshoppage from './customerviewshoppage.jsx';
import {Link} from 'react-router-dom';
function Customershopsforyou(){
    return(
        <div style={{"margin-bottom":"200px","margin-top":"100px","margin-left":"50px"}}>
            <div class="section">
                    <h4>These shops are just for you</h4>
            </div>
            <div class ="row" >
            <div class="card text-center" style={{"width": "18rem"}}>
                
                <div class="card-body">
                    <h5 class="card-title">ID Phone store</h5>
                    <img class="card-img-top" src= {Mobileshopvec} alt="mobilephone"/>
                    <h6 class="card-text">we sell only high quality android phones</h6>
                    <Link  to="/customer/viewshoppage"><a href="#" class="btn btn-dark">see details</a></Link>
                </div>
            </div>

            <div class="card text-center" style={{"width": "18rem"}}>
                
                <div class="card-body">
                    <h5 class="card-title">Shiva Phone store</h5>
                    <img class="card-img-top" src={ Mobileshopvec} alt="mobilephone"/>
                    <h6 class="card-text">We are well established sellers of mobile phones</h6>
                    <a href="#" class="btn btn-dark">see details</a>
                </div>
            </div>

            <div class="card text-center" style={{"width": "18rem"}}>
                
                <div class="card-body">
                    <h5 class="card-title">TD Kids world</h5>
                    <img class="card-img-top" src={ Toysshopvec} alt="mobilephone"/>
                    <h6 class="card-text">Island's largest kids item collection</h6>
                    <a href="#" class="btn btn-dark">see details</a>
                </div>
            </div>

            <div class="card text-center" style={{"width": "18rem"}}>
                
                <div class="card-body">
                    <h5 class="card-title">TD Kids world</h5>
                    <img class="card-img-top" src={ Toysshopvec} alt="mobilephone"/>
                    <h6 class="card-text">Island's largest kids item collection</h6>
                    <a href="#" class="btn btn-dark">see details</a>
                </div>
            </div>

            <div class="card" style={{"width": "18rem"}}>
                
                <div class="card-body">
                    <h5 class="card-title">TD Kids world</h5>
                    <img class="card-img-top" src={ Toysshopvec} alt="mobilephone"/>
                    <h6 class="card-text">Island's largest kids item collection</h6>
                    <a href="#" class="btn btn-dark">see details</a>
                </div>
            </div>

        </div>
        </div>
        
    )
}

export default Customershopsforyou 