import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Myska Lazarev</h1>
            <h2>{allPosts} record, likes: {liked}</h2>
        </div>
    )
}

export default AppHeader;