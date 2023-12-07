import { useState } from "react";
import "./App.css";
import CalenderProvider from "./context/CalenderProvider";
import DaysContainer from "./containers/DaysContainer/DaysContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CalenderProvider>
        {console.log("loading")}
        <DaysContainer />
      </CalenderProvider>
    </>
  );
}

export default App;
