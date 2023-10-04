import React from "react";
import {Link} from 'react-router-dom';
// import './Footer.css';

function Footer()
{
    return(
        <section className="section footer bg-gradient text-white" style={{"background-color":"black","padding-top":"100px","padding-bottom":"100px"}}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h6>PetHeaven</h6>
                        <hr/>
                        <div>
                        <p className="text-white" >
                            PetHeaven is an online web based system to facilitate services for animals specially cats and dogs.
                            This is system to facilitate services to the orphan animals, mainly
                            cats and dogs, covering up all the functionalities related to them from pet adoption to
                            doctor consultation.
                        </p>
                        </div>
                        
                    </div>
                
                    <div className="col-md-3">
                        <h6>Information</h6>
                        <hr/>
                        <div>About Us</div>
                        <div>Contact Us</div>
                        <div>Privacy and policies</div>
                        <div>Terms and conditions</div>
                        
                    </div> 

                    <div className="col-md-3">
                    <h6>Contact</h6>
                        <hr/>
                        <div><p className="text-white mb-1">22 Palm Grove, Colombo 00300</p></div>
                        <div><p className="text-white mb-1">+94 112 145 340</p></div>
                        <div><p className="text-white mb-1">+94 112 145 341</p></div>
                        <div><p className="text-white mb-1">info@gadgetbizlink.com</p></div>
                    </div>

                    <div className="col-md-3">
                    <h6>Contact</h6>
                        <hr/>
                        <div><p className="text-white mb-1">Follow and connect us</p></div>
                        <div><p className="text-white mb-1">Facebook  <i class="fa fa-facebook-official" aria-hidden="true"></i></p></div>
                        <div><p className="text-white mb-1">Instagram  <i class="fa fa-instagram" aria-hidden="true"></i></p></div>
                        <div><p className="text-white mb-1">Linkedin  <i class="fa fa-linkedin-square" aria-hidden="true"></i></p></div>
                    </div>
                </div>
            </div>
            <section className="section footer1  text-white">
                <div><p className="text-center">©2022 Gadgetbizlink.com All trademarks are owned by Gadgetbizlink organization</p></div>
            </section>
        </section>
        
    );
}

export default Footer;