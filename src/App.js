import Login from "./components/Login";
import { useState } from "react";

import "./App.css";

function App() {

  const [logged, setLogged] = useState(false);
  const [otherLogged, setOtherLogged] = useState(false)


  return (
    <div className="App">
      <header className="App-header">
        <Login logged={logged} setLogged={setLogged} otherLogged={otherLogged} setOtherLogged={setOtherLogged}/>
      </header>
    </div>
  );
}

export default App;
