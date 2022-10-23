import React, { useEffect, useState } from 'react'
import Timer from './Timer'

const Details = (props) => {
    const startTimerSeconds = 10
    const [userDetails, setUserDetails] = useState(null)
    const [seconds, setSeconds] = useState(startTimerSeconds)

    useEffect(() => {
        if (!!props.selectedUser) {
            fetch(`https://api.github.com/users/${props.selectedUser.login}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setSeconds(startTimerSeconds)
                    setUserDetails(data)
                })
        }
    }, [props.selectedUser])

    useEffect(() => {
        if (seconds < 1) setUserDetails(null)
    }, [seconds])

    return (
        <div>
            {userDetails && (
                <div>
                    <Timer
                        seconds={seconds}
                        setSeconds={setSeconds}
                        keyTimerId={userDetails.id}
                    />
                    <h2>{userDetails.login}</h2>
                    <img
                        src={userDetails.avatar_url}
                        width="250px"
                        height="250px"
                        alt=""
                    />
                    <br />
                    {userDetails.login}, followers : {userDetails.followers}
                </div>
            )}
        </div>
    )
}

export default Details
