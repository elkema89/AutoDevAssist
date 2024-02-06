import './App.css';
import {Routes, Route} from 'react-router-dom';
import  Landing  from "./component/Landing/Landing";
import Home from "./component/Home/Home";

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
