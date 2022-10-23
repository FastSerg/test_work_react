import React, { useEffect, useState } from 'react'

const HeaderInput = (props) => {
    const [tempSearch, setTempSearch] = useState('')

    useEffect(() => {
        setTempSearch(props.searchTern)
    }, [props.searchTern])

    return (
        <div>
            <input
                type="text"
                placeholder="search"
                value={tempSearch}
                onChange={(e) => setTempSearch(e.target.value)}
            />
            <button onClick={() => props.setSearchTern(tempSearch)}>
                find
            </button>
        </div>
    )
}

export default HeaderInput
