//import './App.css';

// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <TextForm heading="Enter the text to analize" mode={mode} />
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
