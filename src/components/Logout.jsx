import React from "react"
import {GoogleLogout} from 'react-google-login';
import { connect } from 'react-redux'
import { logoutUser } from '../store/actions/user.ation'
import { GOOGLE_CLIENT_ID } from '../common/constants'
import Icon from './common/icons'



const Logout = (props) => {

    const logOutIcon = renderProps => (
        <div onClick={renderProps.onClick}>
            <Icon name="logout"/>
        </div>
    )

    return(
        <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.logoutUser}
            className="my_test"
            render={renderProps => logOutIcon(renderProps)}

        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Logout)