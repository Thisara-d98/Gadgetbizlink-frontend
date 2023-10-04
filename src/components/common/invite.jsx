import React from 'react';

function Invite(){
    return (
       <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <div class="row">
                <div class="card-text-center col col-sm-6" style={{"margin-bottom":"140px"}}>
                    <div class="card-body">
                        <p class="card-text" style={{"font-size":"60px","margin-left":"150px"}}>Sign up as a buyer</p>
                        <a href="#" class="btn btn-dark" style={{"font-size":"20px","margin-left":"400px", "border-radius":"350px", "padding":"15px"}}>Sign Up</a>
                    </div>
                </div>    
                <div class="card-text-center col col-sm-6"  style={{"margin-bottom":"140px"}}>
                    <div class="card-body">
                        <p class="card-text" style={{"font-size":"60px","margin-left":"150px"}}>Sign up as a seller</p>
                        <a href="#" class="btn btn-dark" style={{"font-size":"20px","margin-left":"400px", "border-radius":"350px", "padding":"15px"}}>Sign Up</a>
                    </div>
                </div>    
            </div>
       </div> 
    )
}

export default Invite;