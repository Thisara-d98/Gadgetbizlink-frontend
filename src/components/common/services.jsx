import React from 'react';
import Servicesimg1 from '../../resources/images/servicesimg1.jpg'
import Servicesimg2 from '../../resources/images/servicesimg2.jpg'
import Servicesimg3 from '../../resources/images/servicesimg3.jpg'
function Services(){
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            
            <div className="row" style={{"margin-left":"250px"}}>
                <div class="card col-12 col-sm-3">
                    <img class="card-img-top" style={{"width":"37rem"}} src={Servicesimg1} alt="cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Electronic devices</h5>
                        <p class="card-text">Connect with leading Mobile and Electronic devices distributors in the island</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Learn more</a>
                    </div>
                </div>

                <div class="card col-12 col-sm-3">
                    <img class="card-img-top" style={{"width":"38rem"}} src={Servicesimg2} alt="cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Home and TV appliances</h5>
                        <p class="card-text">Enjoy your time at home, with best life easy appliances</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Learn more</a>
                    </div>
                </div>

                <div class="card col-12 col-sm-3">
                    <img class="card-img-top" style={{"height":"28rem"}} src={Servicesimg3} alt="cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Baby and Gift stores</h5>
                        <p class="card-text">Access ultimate market place to buy gifts for your kids and lovely ones</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Learn more</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services