
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

//!
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//!



let name = "Mohit";

function App() {
  let showAleart = (type,text)=>{
    setAleart({
      text: text,
      type: type,
    })
    setTimeout(() => {
      setAleart(null);
    }, 3000);
  }

  let [colorMode, setColorMode] = useState("light");
  let [aleart, setAleart] = useState(null);

 const removeBodyClasses = ()=>{
   document.body.classList.remove("bg-dark");
   document.body.classList.remove("bg-light");
   document.body.classList.remove("bg-warning");
   document.body.classList.remove("bg-danger");
   document.body.classList.remove("bg-sucess");
   document.body.classList.remove("bg-info");
 }

  let toggleMode = (cls)=>{
    document.body.classList.add("bg-"+cls);
    if(colorMode === "light"){
      setColorMode("dark");
      showAleart("Tips","DarkMode Eable");
      document.body.style.backgroundColor = "grey";
      // document.title = "Text Util - Dark"
    }else{
      setColorMode("light");
      showAleart("Tips","DarkMode Disable");
      document.body.style.backgroundColor = "white";
      // document.title = "Text Util - Lght"
    }
  };

return (
    <Router>

      <Navbar title="Text-Util" mode={colorMode} toggleMode={toggleMode} />

      <Alert aleart={aleart} />

      <Routes>

        <Route exact path="/about" element={<About />} />

        <Route 
          exact path="/" 
          element={
            <TextForm
              heading="Enter Text to Analyse"
              mode={colorMode}
              aleart={aleart}
              showAleart={showAleart}
            />
          } 
        />

      </Routes>

    </Router>
  );
}

export default App;