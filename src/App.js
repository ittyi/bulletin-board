import React, { useState, useEffect } from 'react';

function App() {
  const [listThread, setListThread] = useState([{}]);

  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0')
      .then(res => res.json())
      .then(data => {
        setListThread(data)
      })
  }, []);

  return (
    <>
      <main>
        <ul>
          {listThread.map(thread => (
              <li>{thread.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
