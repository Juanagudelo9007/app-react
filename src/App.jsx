import React, { useEffect, useState } from "react";
import app from "./components/firebase";
import Home from "./components/Home";
import Login from "./components/Login";
import AppRouter from "./Router/AppRouter";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((userFirebase) => {
      console.log("Sesion Active with", userFirebase);
      setUser(userFirebase);
    });
  }, []);

  return (
    <div>
      <div>{user ? <AppRouter /> : <Login setUser={setUser} />}</div>
    </div>
  );
}

export default App;
