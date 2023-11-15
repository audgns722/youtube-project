import React from 'react'
import { Link } from 'react-router-dom'
import { CgUserlane } from "react-icons/cg";
const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em><CgUserlane /></em>
                <span><i>documentary</i><br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo