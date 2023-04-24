//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import Aboutus from './Components/Aboutus';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './Components/Aboutus';


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
    },1000)
  };

  return (
    <>
      <Navbar
        defabt="AboutUs"
        appname="TextUtil"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      
        <Routes>
          <Route exact path="/" element={<TextForm alertf={showAlert} />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      

      {/* <Aboutus/> */}
      {/* <TextForm /> */}

      {/* <div className='container my-3 row='>
    <TextForm heading="Enter your text below"/>
    </div> */}
    </>
  );
}

export default App;
