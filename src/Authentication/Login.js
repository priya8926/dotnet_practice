import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function login() {
  const submitHandler = () => {};
  return (
    <>
      <form className="container mt-5" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your email address"
            name="Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="password"
            name="Password"
            required
          />
        </div>
        <button
          type="submit"
          value="login"
          className="btn btn-primary px-2 mx-2 mt-2"
        >
          {" "}
          Login{" "}
        </button>
        <Link to="/register">
          <button
            type="submit"
            value="login"
            className="btn btn-primary px-2 mx-2 mt-2 "
          >
            {" "}
            Sign up{" "}
          </button>
        </Link>
      </form>
    </>
  );
}

export default login;
