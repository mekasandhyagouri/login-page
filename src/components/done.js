import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Done() {
    return (
        <div className='app'>
            <h3>You are successfully registered!</h3>
            <br />
            <br />
            <Link to='/login'>login</Link>

        </div>
    )
}

export default Done
