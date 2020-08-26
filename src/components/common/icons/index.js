import React from 'react'

import DeleteIcon from './delete.icon'
import LogoutIcon from './logout.icon'


const Icon = props => {

    switch(props.name) {
        case "logout":
            return <LogoutIcon {...props} />
        case "delete":
            return <DeleteIcon {...props} />
        default:
            return '';
    }

}

export default Icon