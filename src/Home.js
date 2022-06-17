import React from 'react'
import {Link} from 'react-router-dom';
import './index.css';
const Home = () => {
    const user="Ansh";
  return (
    <div>
      <center>
          <h3>Welcome to Home Page </h3>
          
          
          
          <Link to ='/dashboard' className='Link'> Dashboard</Link>
          <Link to = '/about' className='Link'> About </Link>
      </center>
    </div>
  )
}

export default Home
