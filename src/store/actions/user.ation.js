import { ACTIONS } from '../../common/constants'
import history from '../../common/history';


export const setUser = (payload) => {
    return async(dispatch) => {
        /**
         * Using localstorage here from simplicity reasons
         * We could have used redux-persisit or hit-api to get details when user refreshes page
         */
        console.log({payload})
        localStorage.setItem("isAuthenticated", true)
        localStorage.setItem("token", payload.accessToken)
        localStorage.setItem("profileObj", JSON.stringify(payload.profileObj))
        // setting it to redux state for to demonstrate use of redux workflow
        dispatch({ type: ACTIONS.SET_USER, payload })
        dispatch({ type: ACTIONS.SET_IS_AUTH})
        console.log("Redirecting to list.. ")
        history.push('/redirect');
        history.push('/list')
    }
}

export const logoutUser = payload => {
    console.log("Logout called")
    return async dispatch => {
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("token")
        localStorage.removeItem("profileObj")
        dispatch({ type: ACTIONS.SET_USER, payload: {} })
        dispatch({type: ACTIONS.SHOW_NOTFICATION, notification: { isError: false, msg: 'Logged out successfully' }})
        dispatch({ type: ACTIONS.REMOVE_AUTH})
        history.push('/redirect');
        history.push('/login')
    }
}