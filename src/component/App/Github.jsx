import React, { useEffect, useState } from 'react'

const Github = (props) => {
    const [selectedUser, setSelectedUser] = useState('')
    const [userName, setUserName] = useState([])
    const [tempSearch, setTempSearch] = useState('TelychkoVitalii')
    const [searchTern, setSearchTern] = useState('TelychkoVitalii')
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        if (selectedUser) document.title = selectedUser.login
    }, [selectedUser])

    useEffect(() => {
        fetch(`https://api.github.com/search/users?q=${searchTern}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => setUserName(data.items))
    }, [searchTern])

    useEffect(() => {
        if (!!selectedUser) {
            fetch(`https://api.github.com/users/${selectedUser.login}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => setUserDetails(data))
        }
    }, [selectedUser])

    return (
        <div
            style={{
                display: 'flex',
                gap: '42px',
                margin: '50px',
            }}
        >
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="search"
                        value={tempSearch}
                        onChange={(e) => setTempSearch(e.target.value)}
                    />
                    <button onClick={() => setSearchTern(tempSearch)}>
                        find
                    </button>
                </div>
                <ul>
                    {userName.map((user) => (
                        <li
                            style={
                                selectedUser === user
                                    ? { background: 'gray' }
                                    : null
                            }
                            key={user.id}
                            onClick={() => setSelectedUser(user)}
                        >
                            {user.login}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>UserName</h2>
                {userDetails && (
                    <div>
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
        </div>
    )
}

export default Github
