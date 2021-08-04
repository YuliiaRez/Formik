import React from 'react'

function ChildSelectedUsersList(props) {
    const { users } = props;
    const selectedUsers = users.filter(u => u.iSelected);
    const mapUsers = ({ id, firstName, lastName }) =>
        <li key={id}>{firstName} {lastName}
        </li>
    return (

        <ol>{selectedUsers.map(mapUsers)}</ol>
    )
};

export default ChildSelectedUsersList
