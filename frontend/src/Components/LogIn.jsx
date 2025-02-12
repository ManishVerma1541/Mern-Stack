import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LogIn = () => {
  const [formdata, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    if (json.success) {
      message: "data post success";
    } else {
      message: "Invalid Credential";
    }

    const handleChange = (e) => {
      setData({ ...data, [e.taeget.name]: e.target.value });
    };
  };
  return (
    <div className="d-flex vh-100 justify-content-center align-item-center bg-primary">
      <div className="p-5 bg-white w-25">
        <form action="#" onSubmit={handleSubmit}>
          <h1 className="mt-3 text-center">Login Form</h1>

          <div className="mt-3">
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

          <div className="mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={handleChange}
            />
            <Link className="ms-3 " to="/signup">
              <a href="">Don`t Have an account</a>
            </Link>
          </div>

          <div className="row mt-3">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
