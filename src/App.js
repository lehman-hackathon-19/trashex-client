import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState("")

  useEffect(() => {
    fetchData();
  })

  const fetchData = async () => {
    fetch('https://cogent-altar-259201.appspot.com/')
      .then(response => console.log(response))
  }

  return (
    <div className="App">
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
