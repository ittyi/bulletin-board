import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ThreadNew() {
  const [title, setTitle] = useState("");

  function createThread() {
    axios
      .post("https://railway.bulletinboard.techtrain.dev/threads", {
        title: title,
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <>
      <h1>スレッド新規作成</h1>
      <div>
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
        <button onClick={createThread}>Create Post</button>
      </div>
      <Link to={`/`}>top へ戻る</Link>
    </>
  );
}
