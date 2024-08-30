import React, { useState } from "react";
import LoginForm from "./components/Loginform";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (authToken) => {
    // Save the token (e.g., in localStorage or state)
    localStorage.setItem("authToken", authToken);
    setToken(authToken);
  };

  return (
    <div>
    <Sidebar></Sidebar>
      {!token ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <p>Welcome! You are logged in.</p>
      )}
    </div>
  );
};

export default App;
