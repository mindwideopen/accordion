import React, {useEffect} from 'react';

export default {
    title: 'useEffect'
}

// export const UseEffectStories = () => {
//
//     const [counter, setCounter] = React.useState(1);
//     const [fake, setFake] = React.useState(1);
//     console.log('Сама компонента')
//     useEffect(() => {
//
//         console.log('useEffect no array');
//         document.title = counter.toString()
//     })
//     useEffect(() => {
//
//         console.log('useEffect empty array ');
//         document.title = counter.toString()
//     }, [])
//     useEffect(() => {
//
//         console.log('useEffect counter');
//         document.title = counter.toString()
//     }, [counter])
//     return (
//         <div>
//             hello, {counter}
//             <button onClick={() => setCounter(1)}>counter</button>
//             <button onClick={() => setFake(fake + 1)}>fake</button>
//         </div>
//     );
// };
export const SetTimeoutExample = () => {

    const [counter, setCounter] = React.useState(1);
    const [fake, setFake] = React.useState(1);

    console.log(' SetTimeoutExample  ' + counter)

  useEffect (() => {

      setInterval (() => {
          console.log('counter ' +  counter)
          setCounter(state => state + 1)  // это вариант логики изменнеия стейта. counter зафиксирован в объекте useEffect де-то, но можно получить в state актуальное значение counter
              //плюс вариант state => state + 1
      }, 1000)
      return () => {  //сюда описыватеся cleanUp функция


      }
  }, [])

return (
    <div>
        hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>counter</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>
    </div>
);
}
;

