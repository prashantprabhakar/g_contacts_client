// @ts-check
import axios from 'axios'

import {API_URL} from '../common/constants'

const handleRequest = async({method, url, data}) => {
  try{
    url = API_URL+url
    if(method === 'GET') {
        let resp = await axios.get(url, {params: data})
        return await handleResponse(resp)
    }
    else if (method === 'POST') {
      let resp = await axios.post(url, data)
      return await handleResponse(resp)
    }
  } catch(error) {
      console.log(error)
      return await handleResponse(error.response || error)
    }
}

const handleResponse = async(resp) => {
  try{
    console.log(resp)
    let  { status } = resp
    if(!status) status = resp.response && resp.response.status
    if(status === 401 ) return handleLogout()
    if(resp && resp.data) {
      return resp.data
    } else {
      return {success: false, message: 'Sorry something broke !!'}
    }
  } catch(error) {
    console.log(error)
    return {success: false, message: 'Sorry something broke !!'}
  }

}


const handleLogout = () => {
  localStorage.removeItem('isAuthenticated')
}


export default handleRequest
