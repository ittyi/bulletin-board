import { Link } from "react-router-dom";
import axios from 'axios';

export default function ThreadNew() {
  function createThread() {
    axios
      .post("https://railway.bulletinboard.techtrain.dev/threads", {
        title: "Hello World!",
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <>
      <h1>スレッド新規作成</h1>
      <div>
         <button onClick={createThread}>Create Post</button>
      </div>
      <Link to={`/`}>top へ戻る</Link>
    </>
  );
}
