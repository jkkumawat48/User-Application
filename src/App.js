import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Home from './Home';
import { Switch, Route, Routes } from "react-router-dom";
import Login from './Login';
import Details from './Details';
import Error from './Error';
import Contact from './Contact';
// import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/*" element={<Error/>}/>
          <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
