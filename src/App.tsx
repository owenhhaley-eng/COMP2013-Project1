import "./App.css";
import data from "./data/data";
import ThriftHappensApp from "./Components/ThriftHappensApp";

function App() {
  return (
    <>
      <ThriftHappensApp data={data} />
    </>
  );
}

export default App;
