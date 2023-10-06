import React from 'react';
import '../../resources/styles/customer/customershopprofile.css'
import Customersearchresults from './customersearchresults';

function Customershopprofile(){
    return(
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
            <div class="container bootstrap snippets bootdey">
                <div class="row">
                    <div class="profile-nav col-md-3">
                        <div class="panel">
                            <div class="user-heading round">
                                <a href="#">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                                </a>
                                <h1>Camila Smith</h1>
                                <p>deydey@theEmail.com</p>
                            </div>

                            <ul class="nav nav-pills nav-stacked">
                                <li class="active" style={{"margin-right":"50px"}}>Rating</li>
                                <li><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></li>
                                <li><a>view reviews</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="profile-info col-md-9">
                        <div class="panel">
                    </div>
                    <div class="panel">
                        <div class="bio-graph-heading" style={{"margin-bottom":"50px"}}>
                            Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
                        </div>
                        <form>
                            <textarea placeholder="Send a quick message" rows="2" class="form-control input-lg p-text-area"></textarea>
                        </form>
                        <footer class="panel-footer" style={{"margin-bottom":"150px"}}>
                            <button class="btn btn-success pull-left" style={{"margin-top":"20px"}}>send</button>
                        </footer>

                        <div class="panel-body bio-graph-info">
                            <h1>Bio Graph</h1>
                            <div class="row">
                                <div class="bio-row"><p><span>shop name </span>: Camila phone shop</p></div>
                                <div class="bio-row">
                                    <p><span>Reg No. </span>: Reg/12/1</p>
                                </div>
                                <div class="bio-row">
                                    <p><span>Address </span>: 12A, Colombo Road,Galle</p>
                                </div>
                                
                                <div class="bio-row">
                                    <p><span>City</span>:Galle</p>
                                </div>
                  
                                <div class="bio-row">
                                    <p><span>ownership</span>: J.D. Dilshan</p>
                                </div>
                                <div class="bio-row">
                                    <p><span>Email </span>: jddilshan@google.com</p>
                                </div>
                                <div class="bio-row">
                                    <p><span>Mobile </span>: (12) 03 4567890</p>
                                </div>
                                <div class="bio-row">
                                    <p><span>Phone </span>: 88 (02) 123456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Customersearchresults/>
        </div>    
    )
}

export default Customershopprofile;