import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Contact from './components/Contact';
import Terms from './components/Terms';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = (cls) => {
    if (cls === 'success' || cls === 'danger' || cls === 'warning' || cls === 'info') {
      document.body.className = 'bg-' + cls;
      setMode('dark');
      toast.info(`Theme changed to ${cls}`, { theme: "dark" });
    } else {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
        toast.success("Dark mode enabled", { theme: "dark" });
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        toast.success("Light mode enabled", { theme: "light" });
      }
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/contact" element={<Contact mode={mode} />} />
            <Route exact path="/terms" element={<Terms mode={mode} />} />
            <Route exact path="/" element={
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
