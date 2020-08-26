import { ACTIONS } from '../../common/constants'
import  handleRequest  from "./../../services/http.service";

export const fetchContacts = () => {
    return async(dispatch) => {
        let url = '/contacts/list'
        try {
          let resp = await handleRequest({
            method: 'GET',
            url,
            data: {
              token: localStorage.getItem('token')
            }

          })
          if(resp.success) {
            console.log(resp.data)
            dispatch({ type: ACTIONS.SET_CONTACT_LIST, payload: resp.data})
            dispatch({type: ACTIONS.SHOW_NOTFICATION, notification: {isError: false, msg: 'Contact List loaded'}})
          } else {
            dispatch({type: ACTIONS.SHOW_NOTFICATION, notification: {isError: true, msg: resp.message}})
          }
        } catch(e) {
          let message = e?.response?.data?.message ||"Something went wrong"
          dispatch({type: ACTIONS.SHOW_NOTFICATION, notification: {isError: true, msg: message}})
        }
    }
}

export const deleteContact = resourceName => {
  console.log({resourceName, token: localStorage.getItem('token')})
  return async dispatch => {
    let url = '/contacts/delete'
    try {
      let resp = await handleRequest({
        method: 'POST',
        url,
        data: {
          token: localStorage.getItem('token'),
          resourceName,
        }

      })
      if(resp.success) {
        dispatch({type: ACTIONS.SHOW_NOTFICATION, notification: {isError: true, msg: 'Contact deleted'}})
        dispatch(fetchContacts())
      } else {
        dispatch({type: ACTIONS.SHOW_NOTFICATION, notification: {isError: true, msg: resp.message}})
      }
    } catch(error) {
      let message = error?.response?.data?.message ||"Something went wrong"
      dispatch({type: ACTIONS.SHOW_NOTFICATION, notification: {isError: true, msg: message}})
    }
  }
}