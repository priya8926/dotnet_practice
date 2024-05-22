import React from 'react'
import { Link } from 'react-router-dom'

function Mainpage() {
    return (
        <>
            <div className='container m-5 px-5'>

                <Link to={"/show"}>
                    <button className='btn btn-primary mx-3'>
                        Show Data
                    </button>
                </Link>
                <Link to={"/create"}>
                    <button className='btn btn-primary mx-3'>
                        Create Data
                    </button>
                </Link>

            </div>
        </>
    )
}

export default Mainpage
