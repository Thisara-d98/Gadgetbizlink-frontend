import React,{useEffect,useState} from 'react';
import Header from './header.jsx';
import Introduction from './introduction.jsx';
import Services from'./services.jsx';
import Whyuse from './whyuse.jsx';
import Footer from './footer.jsx';
import Invite from './invite.jsx';

function Home(){
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <div class="mb-200"><Header/></div>
            <Introduction/>
            <Services/>
            <Whyuse/>
            <Invite/>
            <Footer/>
          
        </div>
       
    )
}

export default Home;