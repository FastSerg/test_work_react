import React, { useEffect, useState } from 'react'
import Details from './Details'
import HeaderInput from './HeaderInput'
import UserNameList from './UserNameList'

const Github = (props) => {
    let initialSearchState = 'TelychkoVitalii'
    const [selectedUser, setSelectedUser] = useState('')
    const [searchTern, setSearchTern] = useState(initialSearchState)

    useEffect(() => {
        if (selectedUser) document.title = selectedUser.login
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
                <HeaderInput
                    searchTern={searchTern}
                    setSearchTern={setSearchTern}
                />
                <button
                    onClick={() => {
                        setSearchTern(initialSearchState)
                    }}
                >
                    reset
                </button>
                <UserNameList
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                    searchTern={searchTern}
                />
            </div>
            <Details selectedUser={selectedUser} />
        </div>
    )
}

export default Github
