import { ACTIONS }  from './../../common/constants'

const initState = {
    notification: {},
    isAuthenticated: localStorage.getItem('isAuthenticated')
}

const commonReducer = (state=initState, action) => {

  switch(action.type) {
    case ACTIONS.SHOW_NOTFICATION:
        
        return {
            ...state,
            notification: action.notification
        }
        
    
    case ACTIONS.HIDE_NOTIFICATION:
        return {
            ...state,
            notification: initState
        }
    
    case ACTIONS.SET_IS_AUTH:
        localStorage.setItem('isAuthenticated', true)
        return {
            ...state,
            isAuthenticated: true
        }

    case ACTIONS.REMOVE_AUTH:
        localStorage.clear()
        return {
            ...state,
            isAuthenticated: false
        }

    default:
        return state;
    
  }

}

export default commonReducer