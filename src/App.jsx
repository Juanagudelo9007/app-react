import React, { useState } from "react";
import app from "./components/firebase";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <div>{user ? <Home /> : <Login setUser={setUser} />}</div>
    </div>
  );
}

export default App;
