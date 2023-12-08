import "./App.css";
import CalenderContextProvider from "./context/CalenderContextProvider";
import DaysContainer from "./containers/DaysContainer/DaysContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <CalenderContextProvider>
        <Header />
        <DaysContainer />
      </CalenderContextProvider>
    </>
  );
}

export default App;
