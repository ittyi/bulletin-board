import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

export default function ThreadDetail() {
  const useloc = useLocation();
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


  const [post, setPost] = useState("");
  function createThreadMessage() {
    const url =
      "https://railway.bulletinboard.techtrain.dev/threads/" +
      threadId +
      "/posts";

    axios
      .post(url, {
        post: post,
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload()
      });
  }

  return (
    <>
      <h2>{useloc.state}</h2>
      <main>
        <ul>
          {listMessage.map((message) => (
            <li key={String(message.id)}>{message.post}</li>
          ))}
        </ul>
        <div>
          <input onChange={(event) => setPost(event.target.value)}/>
          <button onClick={createThreadMessage}>投稿</button>
        </div>
      </main>
    </>
  );
}
