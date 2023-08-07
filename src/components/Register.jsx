import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  function formHandler(e) {
    e.preventDefault();
    if (!name) {
      setError("Name Is Required");
      return;
    }
    if (!email) {
      setError("email invalid");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password not entered or is less than 6 digits");
      return;
    }
    if (!dob) {
      setError("dob invalid");
      return;
    }
    if (dob && email && password && name) {
      setError("");
    }
    setFormData({
      name: name,
      email: email,
      password: password,
      dob: dob,
    });
    localStorage.setItem("user", formData);
    window.location.href = "/#/login";

    console.log(formData);
  }

  return (
    <div>
      <h2>Register Here</h2>
      <form onSubmit={formHandler}>
        {error && <div>{error}</div>}
        <div>
          {" "}
          <span>Name:</span>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            name="email"
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
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          {" "}
          <span>Dob:</span>
          <input
            type="date"
            value={dob}
            name="dob"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
