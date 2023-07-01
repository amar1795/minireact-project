// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title='text Utils' about="About"/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextForm heading="Enter text here"/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>

      
    
    
    </>
  );
}

export default App;
