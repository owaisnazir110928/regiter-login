import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");
  useEffect(() => {
    const storedItem = localStorage.getItem("authToken");
    setAuthToken(storedItem);
    if (authToken) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {loggedIn && <div>LoggedInSuccessfully</div>}
    </>
  );
}

export default App;
