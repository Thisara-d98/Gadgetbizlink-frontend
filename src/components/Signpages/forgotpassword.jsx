import React from 'react';
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import '../../resources/styles/Signpages/signin.css';
function Forgotpassword(){
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
                            <div style={{"font-size":"28px", "margin-bottom":"80px"}}>Enter your new password correctly. and confirm your password again. submit and you will receive a email.</div>
                            <div class="form-outline mb-4">
                                <input type="text" id="form3Example3" class="form-control form-control-lg" style={{"outline":"none"}} placeholder="Enter new password" />
                            </div>      

                            <div class="form-outline mb-4">
                                <input type="text" id="form3Example3" class="form-control form-control-lg" style={{"outline":"none"}} placeholder="Confirm new password" />
                            </div>  
        
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-dark btn-lg" style={{"padding-left": "2.5rem", "padding-right": "2.5rem"}}>submit</button>
                            </div>
        
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
        )
}

export default Forgotpassword
