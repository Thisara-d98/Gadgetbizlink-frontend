import React,{component} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Addnewitem  from "./components/mobileshopowner/addnewitem.jsx";
import Getitems from "./components/mobileshopowner/getitems.jsx";
import UseEffectDemo from './components/useeffectdemo.jsx';

// common
import Header from "./components/common/header.jsx";
import Home from "./components/common/home.jsx";
import Signin from "./components/Signpages/signin.jsx";
import Signup from "./components/Signpages/signup.jsx";
import Forgotpassword from './components/Signpages/forgotpassword.jsx';
import Customerlandingpage from './components/customer/customerlandingpage.jsx';
function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route exact path='/mobileshop/addnewitems' element={<Addnewitem/>}/>
            <Route exact path='/mobileshopowner/getitems' element={<Getitems/>}/>
            <Route exact path='/useeffectdemo' element={<UseEffectDemo/>}/>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/signin' element={<Signin/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/forgotpassword' element={<Forgotpassword/>}/>
            <Route eaxct path='/customerlandingpage' element={<Customerlandingpage/>}/>
          </Routes>
          
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </Router>

  );
}

export default App;
