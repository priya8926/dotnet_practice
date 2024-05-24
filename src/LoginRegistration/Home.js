import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [UserInfo, setUserInfo] = useState([]); 
  const [updateId, setUpdateId] = useState(null);
  const [editUser, setEditUser] = useState({
    UserName: "",
    Email: "",
    Contact: "",
    Address: "",
  });
  const ref = useRef(null);
  const refClose = useRef(null);

  const handleChange = (e) => {
    setEditUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };
  const getAllEmployees = async () => {
    try {
      const response = await fetch(
        `https://localhost:7271/api/Registration/allEmployee`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data, "data");
        setUserInfo(data);
      }
    } catch (error) {
      console.log("Error loading user data", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`https://localhost:7271/api/Registration/delete/${id}`, {
        method: "DELETE",
      });
      getAllEmployees();
    } catch (error) {
      console.log("Error deleting user", error);
    }
  };
  const handleUpdate = (item) => {
    setEditUser({
      UserName: item.userName,
      Email: item.email,
      Contact: item.contact,
      Address: item.address,
    });
    setUpdateId(item.id);
    ref.current.click();
  };
  const saveChanges = async () => {
    refClose.current.click();
    try {
      const response = await fetch(
        `https://localhost:7271/api/Registration/EditInfo/${updateId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({  id: updateId,
            userName: editUser.UserName,
            email: editUser.Email,
            contact: editUser.Contact,
            address: editUser.Address,}),
        }
      );
      if (response.ok) {
        getAllEmployees();
      }
    } catch (error) {
      alert("Error updating user's info");
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);
  return (
    <>
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Employee details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={editUser.UserName}
                  onChange={handleChange}
                  name="UserName"
                  id="exampleFormControlInput1"
                  autoComplete="off"
                />
                <br />
                <input
                  type="email"
                  className="form-control"
                  value={editUser.Email}
                  name="Email"
                  onChange={handleChange}
                  id="exampleFormControlInput1"
                  autoComplete="off"
                />
                <br />
                <input
                  type="number"
                  className="form-control"
                  value={editUser.Contact}
                  onChange={handleChange}
                  name="Contact"
                  id="exampleFormControlInput1"
                  autoComplete="off"
                />
                <br />
                <input
                  type="textarea"
                  className="form-control"
                  value={editUser.Address}
                  name="Address"
                  onChange={handleChange}
                  id="exampleFormControlInput1"
                  autoComplete="off"
                />
                <br />
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveChanges}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="container">
        <h1 className="text-center m-5">Welcome to our website</h1>

        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">userName</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {UserInfo &&
              UserInfo.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>{item.address}</td>
                      <td>
                        <Link
                          onClick={() => {
                            handleUpdate(item);
                          }}
                        >
                          <i
                            className="fa-solid fa-pen-to-square fa-lg"
                            style={{ color: "#1b1d1c" }}
                          />
                        </Link>
                      </td>
                      <td>
                        <Link
                          onClick={() => {
                            deleteUser(item.id);  
                          }}
                        >
                          <i
                            className="fa-solid fa-trash fa-lg"
                            style={{ color: "#19191a" }}
                          />
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;    
