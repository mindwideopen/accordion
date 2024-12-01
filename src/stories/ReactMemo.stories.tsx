import React from 'react';

export default {
    title: 'ReactMemoDemo'
}


export const Example1 = () => {
    const names = ['Dima', 'Kolya']

    return <>

        <NewMessagesCounter count={10}/>
        <Users users={names}/>

    </>
}


 const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

type UsersProsType = {
    users: Array<string>
}


 const Users = (props: UsersProsType) => {

    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}


// import React from 'react';
//
// export default {
//     title: 'ReactMemoDemo',
// };
//
// type NewMessagesCounterProps = {
//     count: number;
// };
//
// export const NewMessagesCounter = (props: NewMessagesCounterProps) => {
//     return <div>{props.count}</div>;
// };
//
// export const Users = (props: { users: string[] }) => {
//     return (
//         <div>
//             {props.users.map((u, i) => <div key={u}>{u}</div>)}
//         </div>
//     );
// };
//
// export const Example1 = () => {
//     return (
//         <>
//             <NewMessagesCounter count={10} />
//             <Users users={['Dima', 'Kolya']} />
//         </>
//     );
// };