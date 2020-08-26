import { ACTIONS }  from './../../common/constants'

const initState = {
}

const userReducer = (state=initState, action) => {

  switch(action.type) {

    case ACTIONS.SET_USER:
      console.log(action.user)
      return { ...state, ...action.payload}
    
    default:
      return state
  }

}

export default userReducer