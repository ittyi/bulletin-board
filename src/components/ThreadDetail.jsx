import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function ThreadDetail() {
  const threadTitle = useLocation();
  const { threadId } = useParams();
  const [listMessage, setListMessage] = useState([{}]);

  useEffect(() => {
    const url =
      "https://railway.bulletinboard.techtrain.dev/threads/" +
      threadId +
      "/posts?offset=0";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setListMessage(data.posts);
      });
  }, [threadId]);

  return (
    <>
      <h2>{threadTitle.state}</h2>
      <main>
        <ul>
          {listMessage.map((message) => (
            <li key={String(message.id)}>{message.post}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
