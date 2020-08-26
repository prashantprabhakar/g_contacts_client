
import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const GuardedRoute =(props) => {

    console.log({ component: props.component, path: props.path })
        
    if(!props.isAuthenticated || props.isAuthenticated == "false") return <Redirect to="/login" />
    else return <Route {...props} />
    // else return (
    //     <Route path={path} render={(props) => {
    //         if(render) return render(props);
    //           return <Component {...props} />;
    //         }} />
    // )
    
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.common.isAuthenticated,
})

export default connect(mapStateToProps, null)(GuardedRoute)

