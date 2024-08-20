import "./App.css";
import result, {add, multiply, substrac, divide} from "./calculator";

function App() {
  return (
    <>
      <div>
        <ul>
          <li> {result} </li>
          <li>{add(1,2)}</li>
          <li>{multiply(2,3)}</li>
          <li>{divide(5,4)}</li>
          <li>{substrac(4,2)}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
