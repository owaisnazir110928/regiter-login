import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function loginHandler(e) {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!password || password.length < 6) {
      setError("Password is invalid. It should be at least 6 characters long.");
      return;
    }

    setError("");

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("your-api-url", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Authentication token:", data.token);
        localStorage.setItem("AuthToken",data.token)
      } else if (response.status === 401) {
        setError("Invalid email or password. Please check your credentials.");
      } else {
        setError("An error occurred.");
      }
    } catch (error) {
      console.log("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        {error && <div>{error}</div>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
