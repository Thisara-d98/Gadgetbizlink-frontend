import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import Customersearchbar from './customersearchbar'
import Customersearchresults from './customersearchresults'
import Customershopsforyou from './customershopsforyou'

function Customerlandingpage(){
    return(
        <div>
            <Header/>
            <Customersearchbar/>
            <Customersearchresults/>
            <Customershopsforyou/>
            <Footer/>
        </div>
    )
    
}

export default Customerlandingpage