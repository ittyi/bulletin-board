import React, { useState, useEffect } from 'react';

export default function RootThreadList() {
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
              {listThread.map((thread) => (
                  <li key={String(thread.id)}>{thread.title}</li>
              ))}
            </ul>
          </main>
        </>
      );
  }