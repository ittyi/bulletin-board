import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
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
        window.location.reload();
      });
  }

  return (
    <>
      <div className="threaddetail-layout">
        <h2>{useloc.state}</h2>
        <div className="threaddetail-main">
          <ul className="threaddetail-ul">
            {listMessage.map((message) => (
              <li key={String(message.id)} className="threaddetail-li">
                {message.post}
              </li>
            ))}
          </ul>
          <div className="create-message-form">
            <input onChange={(event) => setPost(event.target.value)}/>
            <Button onClick={createThreadMessage}  variant="outlined">投稿</Button>
          </div>
        </div>
      </div>
    </>
  );
}
