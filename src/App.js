import React from "react";

function App() {
  const [list, setList] = React.useState([]);
  const [postPerPage] = React.useState(12);
  const [pageNumber, setPageNumber] = React.useState(5);
  const [loading, setLoading] = React.useState(true);

  console.log(list);

  React.useEffect(() => {
    fetchData();
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
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <h4>pagination react app </h4>

    </div>
  );
}

export default App;
