import React from "react"
import AppRouter from "./AppRouter"
import Notification from './components/common/Notification'

const Main = (props) => {
    return (
        <>
            <AppRouter />
            <Notification />
        </>
    )
}

export default (Main)