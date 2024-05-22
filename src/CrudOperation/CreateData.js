import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateData() {
    const navigate = useNavigate()
    const [std, setStd] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        major: "",
        gpa: "",
        age: "",
    })

    const handleChange = (e) => {
        setStd({
            ...std,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            
            const response = await fetch(`https://localhost:7271/api/StudentApi`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(std)
            })
            if(response.ok){
                const data = await response.json()
                console.log("new data" , data)
                alert("Data Created")
                navigate("/show")
            }else{
                const errorData = await response.json();
                console.log(`Failed to create data: ${errorData}`)
            }
        } catch (error) {
            console.log("error creating data" , error)
        }
    }
  return (
    <>
            <form onSubmit={handleSubmit}>
                <div className='container mt-5'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name='firstName'
                            value={std.firstName}
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
                            name='lastName'
                            value={std.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Gender
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name='gender'
                            value={std.gender}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Major
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name='major'
                            value={std.major}
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
                            name='age'
                            value={std.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            GPA
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name='gpa'
                            value={std.gpa}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Create</button>
                </div>
            </form>
        </>
  )
}

export default CreateData
