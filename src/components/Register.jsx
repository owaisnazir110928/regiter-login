import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });
  const [error, setError] = useState("");

  function formHandler(e) {
    e.preventDefault();

    const { name, email, password, dob } = formData;

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (!email.trim() || !emailIsValid(email)) {
      setError("Invalid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!dob) {
      setError("Date of Birth is required");
      return;
    }

    setError("");

    const userData = {
      name: name,
      email: email,
      password: password,
      dob: dob,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    window.location.href = "/#/login";

    console.log(userData);
  }

  function emailIsValid(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  return (
    <div>
      <h2>Register Here</h2>
      <form onSubmit={formHandler}>
        {error && <div>{error}</div>}
        <div>
          <span>Name:</span>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <span>Email:</span>
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <span>Password:</span>
          <input
            type="password"
            value={formData.password}
            name="password"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <div>
          <span>Date of Birth:</span>
          <input
            type="date"
            value={formData.dob}
            name="dob"
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
