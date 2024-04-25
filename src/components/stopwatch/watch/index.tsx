import React from "react"
import Style from "./watch.module.scss"

export default function Watch(){
    return(
        <>
            <span className={Style.watchNumber}>0</span>
            <span className={Style.watchNumber}>0</span>
            <span className={Style.watchDivison}>:</span>
            <span className={Style.watchNumber}>0</span>
            <span className={Style.watchNumber}>0</span>
            <span className={Style.watchDivison}>:</span>
            <span className={Style.watchNumber}>0</span>
            <span className={Style.watchNumber}>0</span>
        </>
    )
}