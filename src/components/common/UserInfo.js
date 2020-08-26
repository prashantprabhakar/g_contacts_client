import React from "react"

const UserInfo = (props) => {
    return (
        <>
        <img className="dp vertical_center" src={props.dp_url} alt="" />
        <span className="vertical_center"> {props.name}  </span>
       </>
    )
}

export default UserInfo