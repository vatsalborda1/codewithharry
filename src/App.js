//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar defabt='Check' appname='TextUtil'/>
    <div className='container my-3 row='>
    <TextForm heading="Enter your text below"/>
    </div>
    </>
  );
}

export default App;
