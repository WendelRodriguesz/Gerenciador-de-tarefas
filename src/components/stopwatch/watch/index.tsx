import React from "react"
import Style from "./watch.module.scss"

interface Props {
    time: number | undefined
}

export default function Watch({ time = 0 }: Props) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const [hourDezena, hoursUnidade] = String(hours).padStart(2, '0');
    const [minuteDezena, minuteUnidade] = String(minutes).padStart(2, '0');
    const [secondDezena, secondUnidade] = String(seconds).padStart(2, '0');
    return (
        <>
            <span className={Style.watchNumber}>{hourDezena}</span>
            <span className={Style.watchNumber}>{hoursUnidade}</span>
            <span className={Style.watchDivison}>:</span>
            <span className={Style.watchNumber}>{minuteDezena}</span>
            <span className={Style.watchNumber}>{minuteUnidade}</span>
            <span className={Style.watchDivison}>:</span>
            <span className={Style.watchNumber}>{secondDezena}</span>
            <span className={Style.watchNumber}>{secondUnidade}</span>
        </>
    )
}