import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RootThreadList() {
  const [listThread, setListThread] = useState([{}]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
      .then((res) => res.json())
      .then((data) => {
        setListThread(data);
      });
  }, []);

  return (
    <>
      <div className="threadlist-main">
        <div className="threadlist-all">
          <h2>新着スレッド</h2>
          <ul className="threadlist-ul">
            {listThread.map((thread) => (
              <li key={String(thread.id)} className="threadlist-li">
                <Link to={`/thread/${thread.id}`} state={thread.title}>
                  {thread.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
