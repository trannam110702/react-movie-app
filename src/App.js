import "./App.scss";
import axios from "axios";
axios
  .post("http://localhost:3000/mark", {
    nam: 10,
    chung: 10,
  })
  .then((res) => console.log(res));
function App() {
  return <div className="App"></div>;
}

export default App;
