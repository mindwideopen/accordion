import React, {useCallback,  useState} from 'react';

export default {
    title: 'useMemo'
}

// export const DifficultCounting= () => {
//     const [a, setA] = React.useState(3)
//     const [b, setB] = React.useState(3)
//     let resultA = 1
//     let resultB = 1
//
//     resultA = useMemo(() => {          // запомни tempResultA и не пересчитывай, пока не изменится [a]
//         let tempResultA = 1
//         for (let i = 1; i <= a; i++) {
//             let fake = 0
//             while (fake < 30000000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             tempResultA = tempResultA * i
//         }
//         return tempResultA
//     }, [a])
//
//
//     for (let i = 1; i <= b; i++) {
//         resultB = resultB * i
//     }
//
//     return <>
//         <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
//         <input type="text" value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
//         <hr/>
//
//         <div>
//             Result for A:{resultA}
//         </div>
//
//         <div>
//             Result for B:{resultB}
//         </div>
//     </>
// }
//
// const UsersSecret = (props: UsersProsType) => {
//     console.log('USERS SECRET')
//
//     return <div>
//         {props.users.map((u, i) => <div key={i}>{u}</div>)}
//     </div>
// }
//
// const Users = React.memo(UsersSecret)
//
//
// export const HelpsReactMemo = () => {
//     console.log('HelpsReactMemo')
//     const[counter, setCounter] = useState(0);
//     const[users, setUsers] = useState(['Dima', 'Kolya']);
//     const addUser = () => {
//         setUsers([...users, 'Dani' ])
//     }
//     console.log(users)
//
//
//     let newArray = useMemo(() => {
//
//         return users.filter(i => i.indexOf('i')>-1)
//
//     }, [users])
//
//
//
//     return <>
//         <button onClick={() => setCounter(counter+1)}>+</button>
//         <button onClick={addUser}>addUser</button>
//
//         <NewMessagesCounter count={counter}/>
//         <Users users={newArray}/>
//
//     </>
// }


type BooksProsType = {
    books: string[],
    addBook: () => void,
}

const BooksSecret = (props: BooksProsType) => {
    console.log('Books render')

    return <div>
        <button onClick={() => {
            console.log('click')
            props.addBook()
        }}>addBook</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}

    </div>
}

const Books = React.memo(BooksSecret)

const NewMessagesCounter = (props: any) => {
    console.log('Counter render')
    return <div>{props.count}</div>
}

const MessagesCounter = React.memo(NewMessagesCounter)

export const LikeUseCallback = () => {





    const[counter, setCounter] = useState(0);
    const[books, setBooks] = useState(['React', 'HTML', 'CSS', 'JavaScript', 'NodeJS']);
    console.log(books)

debugger


    const addBook = () => {
        setBooks([...books, 'Angular' ])
    }



    const memoizedAddBook = useCallback(addBook, [books])

    // const memoizedAddBook = useMemo(() => {
    //     return addBook
    // }, [books])








    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <Books  addBook={memoizedAddBook}  books={books}/>
        <MessagesCounter count={counter}/>


    </>
}




