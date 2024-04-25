import { useState } from "react";

import Search from "./components/Search";
import "./assets/css/index.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Loading from "./components/Loading";
import Error from "./components/Error";
import NoData from "./components/NoData";

function App() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  return (
    <div className="app_wrapper">
      <div className="card_wrapper">
        <Heading />
        <Search
          setData={setData}
          setError={setError}
          setLoading={setLoading}
          placeholder={"Search city"}
        />
        {loading ? (
          <Loading />
        ) : error === "Failed to fetch data" ? (
          <NoData />
        ) : error ? (
          <Error />
        ) : data ? (
          <Content data={data} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
