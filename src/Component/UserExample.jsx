import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserExample() {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setUsers(null);
                setError(null);
                setLoading(true);

                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                )
                setUsers(response.data);

            } catch (e) {
                setError(e)
            }
            setLoading(false);
        }
        fetchUsers();
    }, []);

    if(loading) return <div>Loooooading</div>
    if(error) return <div>errrrrrrror</div>
    if(!users) return null;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
    )
}

export default UserExample;