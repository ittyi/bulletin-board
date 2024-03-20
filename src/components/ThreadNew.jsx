import { Link } from "react-router-dom";

export default function ThreadNew() {
//   function search(formData) {
//     console.log("in", formData)
//     // const query = formData.get("query");
//     // alert(`You searched for '${query}'`);
//   }

  return (
    <>
      {/* <h1>スレッド新規作成</h1> */}
      {/* <form action="post">
        <button>test</button>
      </form> */}
      <form method="get" action="http://localhost:3000/">
        <input name="query" />
        <button type="submit">Search</button>
      </form>
      <Link to={`/`}>top へ戻る</Link>
    </>
  );
}
