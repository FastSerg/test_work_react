import React, { useEffect, useState } from 'react'

const UserNameList = (props) => {
    const [userName, setUserName] = useState([])

    useEffect(() => {
        if (!!props.searchTern) {
            fetch(`https://api.github.com/search/users?q=${props.searchTern}`)
                .then((res) => res.json())
                .then((data) => setUserName(data.items))
        }
    }, [props.searchTern])

    return (
        <ul>
            {userName.map((user) => (
                <li
                    style={
                        props.selectedUser === user
                            ? { background: 'gray' }
                            : null
                    }
                    key={user.id}
                    onClick={() => props.setSelectedUser(user)}
                >
                    {user.login}
                </li>
            ))}
        </ul>
    )
}

export default UserNameList
