import React, { Component } from 'react';
import ChildSelectedUsersList from '../ChildSelectedUsersList';
import UsersLIstChild from '../UsersLIstChild';
const dbusers = [
    {
        id: 1,
        firstName: 'Test1',
        lastName: 'Testovich1',
    },
    {
        id: 2,
        firstName: 'Test2',
        lastName: 'Testovich2',
    },
    {
        id: 3,
        firstName: 'Test3',
        lastName: 'Testovich3',
    },
    {
        id: 1,
        firstName: 'Test4',
        lastName: 'Testovich4',
    },
]


export default class UsersListParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: dbusers.map(u => ({ ...u, isSelected: false }))
        }
    }
    setUsers = (newUsers) => {
        this.setState({ users: newUsers })
    };
    render() {
        const { users } = this.state;
        return (
            <>
                <UsersLIstChild users={users} setUsers={this.setUsers} />
                <br />
                <ChildSelectedUsersList users={users} />

            </>
        )
    }
}
