import Search from "./components/Search";
import "./assets/css/index.css";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="app_wrapper">
      <div className="card_wrapper">
        <Heading />
        <Search placeholder={"Search city"} />
      </div>
    </div>
  );
}

export default App;
