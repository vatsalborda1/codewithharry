//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import Aboutus from './Components/Aboutus';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';

function App() {
  const [mode,setmode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      setAlert('Dark mode enabled',' Successfully')
    } else{
      setmode('light')
      setAlert('Light mode enabled',' Successfully')

    }
    
    
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, 
              type: type });
  };

  return (
    
    <>
    
    <Navbar defabt='Check' appname='TextUtil' mode={mode} toggleMode= {toggleMode}/>
    <Alert trick={alert}/>
    {/* <Aboutus/> */}
    <TextForm alertf={showAlert}/>
    
    {/* <div className='container my-3 row='>
    <TextForm heading="Enter your text below"/>
    </div> */}
    </>
  );
}

export default App;
