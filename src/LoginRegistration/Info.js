import React, { useEffect, useState } from "react";

function Info() {
    const[data , setData] = useState([])

    useEffect(()=>{
        const getAllInfo = async()=>{
            try {
                const response = await fetch(`https://localhost:7271/api/Registration/empInfo` ,{
                    method:"GET"
                })
                if(response.ok){
                    const info = await response.json()
                    setData(info)
                    console.log(info , "info")
                }
            } catch (error) {
                console.log(error)
            }
        }
        getAllInfo()
    },[])
  return (
    <>
      <div className="container mt-5">
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Age</th>
              <th scope="col">BirthDate</th>
              <th scope="col">Create At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index) =>{
                return(
                    <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.age}</td>
                        <td>{item.birthday}</td>
                        <td>{item.createdDate}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Info;
