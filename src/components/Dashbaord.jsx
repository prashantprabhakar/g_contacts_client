import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

const Dashboard = (props) => {

    console.log({isAuthenticated: props.isAuthenticated})
    if(!props.isAuthenticated || props.isAuthenticated === "false") return <Redirect to="/login"/>
    else return <Redirect to="/list"/>
    
}

const mapStateToProps = state => ({
    isAuthenticated: state.common.isAuthenticated
})

export default connect(mapStateToProps, null)(Dashboard)