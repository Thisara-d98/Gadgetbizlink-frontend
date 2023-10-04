import React from 'react';
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import '../../resources/styles/Signpages/signin.css';
function Signin(){
    return(
        
        <section>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <Header/>
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-sm-6 col">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"/>
                    </div>
              
                    <div class="col-sm-6 col">
                
                        <form>
                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" class="btn btn-dark btn-floating mx-1">
                                    <i class="fa fa-facebook"></i>
                                </button>
        
                                <button type="button" class="btn btn-dark btn-floating mx-1">
                                    <i class="fa fa-twitter"></i>
                                </button>
        
                                <button type="button" class="btn btn-dark btn-floating mx-1">
                                    <i class="fa fa-linkedin"></i>
                                </button>
                            </div>
        
                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>
    
                            <div class="form-outline mb-4">
                                <input type="email" id="form3Example3" class="form-control form-control-lg" placeholder="Enter email address" />
                            </div>
        
                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg" placeholder="Enter password" />
                            </div>
        
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="form-check mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label" for="form2Example3">Remember me</label>
                                </div>
                    
                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>
        
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-dark btn-lg" style={{"padding-left": "2.5rem", "padding-right": "2.5rem"}}>Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"class="link-danger">Register</a></p>
                            </div>
        
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
        )
}

export default Signin
