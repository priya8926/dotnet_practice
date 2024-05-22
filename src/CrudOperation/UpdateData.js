import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateData() {
    const params = useParams()
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
    const getstdData = async (id) => {
        try {
            const response = await fetch(`https://localhost:7271/api/StudentApi/${id}`, {
                method: "GET"
            })
            if (response.ok) {
                const data = await response.json();
                setStd(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getstdData(params.id)
    },[params.id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://localhost:7271/api/StudentApi/${params.id}`, {
            method: "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(std)
        })
        if (response.ok) {
            alert("update successfully")
            navigate("/show")
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
                    <button type='submit' className='btn btn-primary'> Update</button>
                </div>
            </form>
        </>
    )
}

export default UpdateData
