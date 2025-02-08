//Everything included in overall app so far
import Header from "./components/Header";
import Component1 from "./components/Component1";
import "./App.css";

function App() {
  //Basic set up start 
  //Calls Component1 in browser App
  return (
    <div className="App">
      <Header/>
     {<Component1/>}
    </div>
  );
}


export default App
