import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

export default function ThreadNew() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  function createThread() {
    axios
      .post("https://railway.bulletinboard.techtrain.dev/threads", {
        title: title,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      });
  }

  return (
    <>
      <div className="threadnew-layout">
        <h2>スレッド新規作成</h2>
        <div className="threadnew-main">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <div className="threadnew-btn">
            <div><Link to={`/`}>top へ戻る</Link></div>
            <Button onClick={createThread} variant="outlined">作成</Button>
          </div>
        </div>
      </div>
    </>
  );
}
