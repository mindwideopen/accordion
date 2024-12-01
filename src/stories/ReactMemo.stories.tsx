import React, {useState} from 'react';

export default {
    title: 'ReactMemoDemo'
}



const UsersSecret = (props: UsersProsType) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    console.log('Example1')
    const[counter, setCounter] = useState(0);
    const[users, setUsers] = useState(['Dima', 'Kolya']);
    const addUser = () => {
        setUsers([...users, 'Sveta' + ' ' + new Date().getTime()])
    }


    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>addUser</button>

        <NewMessagesCounter count={counter}/>
        <Users users={users}/>

    </>
}


 const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

type UsersProsType = {
    users: Array<string>
}





