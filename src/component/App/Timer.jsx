import React, { useEffect } from 'react'

const Timer = (props) => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            props.setSeconds((prevState) => prevState - 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [props.keyTimerId])

    return <div>{props.seconds}</div>
}

export default Timer
