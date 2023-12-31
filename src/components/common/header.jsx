import React, { useState } from 'react';


function Header() {
    return(
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <p class="navbar-brand">Gadgetbizlink</p>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <p class="nav-item nav-link active" href="#"><i class="fa fa-home" aria-hidden="true"></i>Home <span class="sr-only">(current)</span></p>
                    <p class="nav-item nav-link" href="#">sign in</p>
                    <p class="nav-item nav-link" href="#">signUp</p>
                </div>
            </div>
        </nav>
    </div>
    )
   
    
  
}

export default Header;
