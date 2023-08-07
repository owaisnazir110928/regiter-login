import React from "react";
import { useState } from "react";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  async function loginHandler(e) {
    e.preventDefault();
    if (!email) {
      setError("email is required");
      return;
    }
    if (!password || password.length < 6) {
      setError("password is invalid should be 6 letter or long");
      return;
    }
    if (password && email) {
      setError("");
      setFormData({
        email: email,
        password: password,
      });
      console.log(formData);
      try {
        const response = await fetch("url", {
          method: "POST",
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        localStorage.setItem("authToken", data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div>
      <form onSubmit={loginHandler}>
        {error && <div>{error}</div>}

        <div>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
