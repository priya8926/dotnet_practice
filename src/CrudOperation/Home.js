import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([]);

  const getAllStudent = async () => {
    try {
      const response = await fetch("https://localhost:7271/api/StudentApi/getAllStudents", {
        method: "GET",

      })
      if (response.ok) {
        const data = await response.json()
        setData(data)
        console.log(data)
      }
    } catch (error) {
      console.log("error fetching student data", error)
    }
  }
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`https://localhost:7271/api/StudentApi/${id}`, {
        method: "DELETE",

      })
      alert("Student deleted")
      if (response.ok) {
        getAllStudent()
      }
    } catch (error) {
      console.log("error deleting student")
    }
  }
  useEffect(() => {
    getAllStudent()
  }, [])
  return (
    <>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">StudentId</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Major</th>
            <th scope="col">GPA</th>
            <th scope="col">Age</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>

          </tr>
        </thead>
        <tbody>
          {
           data && data.map((curData, index) => {
              return (
                <>
                  <tr key={index}>

                    <td>{index+1}</td>
                    <td>{curData.studentId}</td>
                    <td>{curData.firstName}</td>
                    <td>{curData.lastName}</td>
                    <td>{curData.gender}</td>
                    <td>{curData.major}</td>
                    <td>{curData.gpa}</td>
                    <td>{curData.age}</td>
                    <td>
                      <Link onClick={() => { deleteUser(curData.studentId) }}>delete</Link>
                    </td>
                    <td>
                      <Link to={`/update/${curData.studentId}`}>
                        Edit
                      </Link>
                    </td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default Home
