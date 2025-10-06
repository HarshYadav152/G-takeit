// src/pages/_app.js
import { useState, useEffect } from 'react';
import NoteState from '../context/notes/NoteState';
import Navbar from '../components/Navbar';
import { Alert } from '../components/Alert';
import '../styles/globals.css';
import '../styles/App.css';

function MyApp({ Component, pageProps }) {
  const [alert, setAlert] = useState(null);
  
  useEffect(() => {
    // Import Bootstrap JS on client-side only
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  
  return (
    <NoteState>
      <Navbar title="Notebook" />
      <Alert alert={alert} />
      <div className="container">
        <Component {...pageProps} showAlert={showAlert} />
      </div>
    </NoteState>
  );
}

export default MyApp;