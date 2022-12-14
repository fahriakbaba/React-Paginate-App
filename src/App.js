import React from "react";
import PageNumbers from "./components/PageNumbers";
import Post from "./components/Post";
import Loading from "./components/Loading";

function App() {
  const [list, setList] = React.useState([]);
  const [postPerPage] = React.useState(45);
  const [pageNumber, setPageNumber] = React.useState(5);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout( () => {
      fetchData();
    },1500)
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      if (!res.ok) {
        throw new Error("something goes wrong!");
      }
      setList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }


  if (loading) {
    return <Loading />
  }

  return (
    <div className="container mt-5">
      <h4 className="text-capitalize text-center lead fs-3 fw-bold text-primary mb-4">my pagination page</h4>
      <PageNumbers list={list} postPerPage={postPerPage} setPageNumber={setPageNumber} />
      <Post pageNumber={pageNumber} postPerPage={postPerPage} list={list} />
    </div>
  );
}

export default App;
