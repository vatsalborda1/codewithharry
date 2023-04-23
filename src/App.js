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
      showAlert('Dark mode enabled')
    } else{
      setmode('light')
      showAlert('Light mode enabled')

    }
    
    
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(()=>{
      setAlert(null)
    },3000)
  };

  return (
    
    <>
    
    <Navbar defabt='Check' appname='TextUtil' mode={mode} toggleMode= {toggleMode}/>
    <Alert alert={alert}/>
    {/* <Aboutus/> */}
    <TextForm alertf={showAlert}/>
    
    {/* <div className='container my-3 row='>
    <TextForm heading="Enter your text below"/>
    </div> */}
    </>
  );
}

export default App;
