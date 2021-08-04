import React, { Component } from 'react'
import UserListItem from './UserListItem';

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

export default class UsersLIst extends Component {
    constructor(props) {
        super(props)

        this.state = {

            users: dbusers.map(u => ({ ...u, isSelected: false }))
        };

    }
    mapUser = (user, index) => {
        const { users } = this.state;
        const onClickHandler = () => {
            const newUsers = [...users];
            newUsers[index].isSelected = !newUsers[index].isSelected;
            this.setState({ users: newUsers });
        }
        return (<UserListItem user={user} key={index} onClickHandler={onClickHandler} />
        )
    }
    render() {
        const { users } = this.state;
        return (
            <ul>
                {users.map(this.mapUser)}
            </ul>
        )
    }
}
