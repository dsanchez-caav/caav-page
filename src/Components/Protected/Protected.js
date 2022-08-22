import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContexts'

const Protected = ({ children }) => {
    const { user } = UserAuth();
    if (user === null) {
        return <Navigate to='/' />;
    }
    return children
}

export default Protected


