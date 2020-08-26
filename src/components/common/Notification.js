import React from 'react'
import { connect} from "react-redux"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NotificationBar(props) {

  toast.configure({
    autoClose: 1500,
    draggable: false,
    pauseOnHover: true,
    //hideProgressBar: true
  });

  let msgConfig = {
    position: toast.POSITION.BOTTOM_RIGHT
  }

  return (
    <div className='toast-ms'>
      {
          props.notification.isError ?
          toast.error(props.notification.msg, msgConfig):
          toast.success(props.notification.msg, msgConfig)
      }
    </div>
  )
}


const mapStateToProps = state => ({
    notification: state.common.notification
})

export default connect(mapStateToProps, null)(NotificationBar)
 
