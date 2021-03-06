import React, { Component } from 'react'
import UserListItem from './UserListItem';


function UsersLIstChild(props) {
    const { users, setUsers } = props;

    const mapUser = (user, index) => {
        const onClickHandler = () => {
            const newUsers = [...users];
            newUsers[index].isSelected = !newUsers[index].isSelected;
            setUsers(newUsers);
        }
        return (<UserListItem user={user} key={index} onClickHandler={onClickHandler} />
        )
    }

    return (
        <ul>
            {users.map(mapUser)}
        </ul>
    )
}
export default UsersLIstChild;