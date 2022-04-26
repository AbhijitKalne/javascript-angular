import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='conatiner'>
            <div className='row'>
                <div className=''>
                    <ul className='navbar navbar-expand-lg navbar-light  m-5 bg-light'>
                        <li className='nav-iteam'><Link className='nav-link ' to=''>Home </Link></li>
                        
                        <Link className='nav-link' to=''>About</Link>
                        <Link className='nav-link' to=''>News</Link>

                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className=''>main</div>
            </div>
        </div>
    )
}

