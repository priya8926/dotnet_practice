import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const[user,setUser] = useState({
        Email : "",
        Password : ""
    })
    const navigate = useNavigate()
    useEffect(() => {
        const user = localStorage.getItem("user")

        if (user) {
            document.location = "/"
        }
    })
    const handleChange = async(e)=>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://localhost:7271/api/Registration/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body:JSON.stringify(user)
            })
            const data = await response.json()
            if(response.ok){
                console.log("logged in user data" , data.Email)
                alert("Login sucessfully")
                navigate("/")
            }else{
                const err = response.text()
                console.log(err , "err")
                alert(err)
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred during login. Please try again.");  
        }
    }
    return (
        <>
            <form className='container mt-5' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your email address"
                        name='Email'
                        required
                        onChange={handleChange}
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
                        name='Password'
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' value="login" className='btn btn-primary px-2 mx-2 mt-2'> Login </button>
                <Link to="/register">
                    <button type='submit' value="login" className='btn btn-primary px-2 mx-2 mt-2 '> Sign up </button>
                </Link>
            </form>
        </>
    )
}

export default Login
