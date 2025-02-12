import React, { useState } from "react";

export const Signup = () => {
  const [formData, setFormDta] = useState({name : "", email: "", password: "" });
  const handleChange = (e) => {
    setFormDta({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ name ,email, password }),
    });

    const json = await response.json();
    if (json.success) {
      message: "data post success";
    } else {
      message: "Invalid Credential";
    }
  };

  return (
    <div>
      <div className="main container my-4 px-3">
        <form onSubmit={handleSubmit}>
          <h1 className="mt-3 text-center">Signup Form</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="row ">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
