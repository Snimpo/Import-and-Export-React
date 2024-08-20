import "./App.css";
import * as result from "./calculator";

function App() {
  return (
    <>
      <div>
        <ul>
          <li> {result.add(1,2)} </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default App;
