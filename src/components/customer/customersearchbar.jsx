import React from 'react';

function Customersearchbar(){
    return(
        <div>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline row col-sm-8" style={{"margin-left":"25px"}}>
                    <input class="form-control col col-sm-4" type="search" placeholder="Search something here.." aria-label="Search"/>
                    <button class="btn btn-dark col col-sm-2" style={{"margin-left":"25px"}} type="submit">find me <i class="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </nav>
        </div>
    )
}

export default Customersearchbar; 