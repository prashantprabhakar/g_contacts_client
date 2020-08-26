import { ACTIONS }  from './../../common/constants'

const initState = {
}

const contactsReducer = (state=initState, action) => {

  switch(action.type) {

    case ACTIONS.SET_CONTACT_LIST:
      return { ...state, ...action.payload}
    
    default:
      return state
  }

}

export default contactsReducer