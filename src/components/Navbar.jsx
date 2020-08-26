import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'

const Navbar = (props) => {

    if(!props.isAuthenticated || props.isAuthenticated == "false") return ''

    let userObj = {
        name: 'Anonymous'
    }
    try {
        userObj = localStorage.getItem('profileObj')
        if(userObj) userObj = JSON.parse(userObj)
    } catch(err) {
        console.log("Unable tp parse")
    }
    

  return (
    <nav className="nav-wrapper grey nav-blue">
      <div className="container">
        <Link to='/' className='user_dtl'>
            <p className="inline_p"><img className="dp" src={userObj?.imageUrl} alt="" /> </p>
            <p className="inline_p"> {userObj?.name} </p>
        </Link>
        <div className="btn_logout">
            <Logout />
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.common.isAuthenticated,
  user: state.user
})



export default connect(mapStateToProps, null)(Navbar)