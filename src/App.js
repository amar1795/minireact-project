// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
    <Navbar title='text Utils' about="About"/>
    <div className="container">
    <TextForm heading="Enter text here"/>
    </div>
    </>
  );
}

export default App;
