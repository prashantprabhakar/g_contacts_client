import React, {useState} from "react"
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login';

import { GOOGLE_CLIENT_ID} from './../common/constants'
import {setUser} from '../store/actions/user.ation'


const Login = props => {

    useState(() => {
        if(!props.isAuthenticated || props.isAuthenticated === "false") return 
	}, []);

    const onSuccess = (res) => {
        let { accessToken, profileObj, tokenId, wc={} } = res
        if(!accessToken) accessToken = wc.access_token
        props.setUser({ accessToken, profileObj, tokenId })
    }

    const onFailure = res => {
        console.log("Login failed", res)
    }


    return(
        <div class="row">
            <div class="col offset-m4 m-2 m_t_25">
            <div class="card">
                <div class="card-content">
                    <div className="login_header"> Login </div>

                    <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Login with google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    scope="https://www.googleapis.com/auth/contacts"
                    isSignedIn={true}
                    className="test"
                />
                </div>
            </div>
            </div>
      </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.common.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)