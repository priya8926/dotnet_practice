import React, { useState } from "react";

function About() {
  const [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Age: "",
    Birthday: "",
  });

  const handleChange = async (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        "https://localhost:7271/api/Registration/employeeInfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(userInfo),
        }
      );
      if (response.ok) {
        setUserInfo({
          FirstName: "",
          LastName: "",
          Email: "",
          Phone: "",
          Age: "",
          Birthday: "",
        });
        alert("Your information sent successfully");
      }
    } catch (error) {
      console.log("error while sending information", error);
    }
  };
  return (
    <>
      <form className="container mt-5" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="First Name"
            name="FirstName"
            required
            value={userInfo.FirstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
            name="LastName"
            required
            value={userInfo.LastName}
            onChange={handleChange}
          />
        </div>
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
            value={userInfo.Email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your phone no"
            name="Phone"
            required
            value={userInfo.Phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Age"
            name="Age"
            required
            value={userInfo.Age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Birthday
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Birth date                                                         "
            name="Birthday"
            required
            value={userInfo.Birthday}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" value="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default About;
