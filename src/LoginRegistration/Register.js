import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
const navigate = useNavigate()
    const [user, setUser] = useState({
        UserName: "",
        Email: "",
        Password: "",
        ConfirmPassword:"",
        Contact:"",
        Address:""
    })
    const InputEvent = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch(`https://localhost:7271/api/Registration/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({user})
            })
            if (response.ok) {
                const data = await response.json()
                console.log("register user data", data)
                alert("Registration Successfull")
                navigate("/")
            }else{
                const errorText = await response.text(); 
                const errorData = JSON.parse(errorText);
                console.log("error" ,errorData )
                alert(errorData)
            }
        } catch (error) {
            console.log("error while registration", error)
        }
    }
    return (
        <>
            <form className='container mt-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        name='UserName'
                        required
                        value={user.UserName}
                        onChange={InputEvent}
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
                        name='Email'
                        required
                        value={user.Email}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Contact
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your Phone number"
                        name='Contact'
                        required
                        value={user.Contact}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Address
                    </label>
                    <input
                        type="textarea"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your adress"
                        name='Address'
                        required
                        value={user.Address}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="password"
                        name='Password'
                        required
                        value={user.Password}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                       Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Confirm password"
                        name='ConfirmPassword'
                        required
                        value={user.ConfirmPassword}
                        onChange={InputEvent}
                    />
                </div>
                <button type='submit' value="login" className='btn btn-primary px-2 mx-2 mt-2 '> Register</button>

            </form>
        </>
    )
}

export default Register
