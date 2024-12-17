import React, {useEffect} from 'react';

export default {
    title: 'useEffect'
}

export const UseEffectStories = () => {

    const [counter, setCounter] = React.useState(1);
    const [counter2, setCounter2] = React.useState(1);
    console.log('Сама компонента')
    useEffect(() => {

        console.log('useEffect no array');
        document.title = counter.toString()
    })
    useEffect(() => {

        console.log('useEffect empty array ');
        document.title = counter.toString()
    },[])
    useEffect(() => {

        console.log('useEffect counter1');
        document.title = counter.toString()
    },[counter])
    return (
        <div>
            hello, {counter}
            <button onClick={() => setCounter(1)}>counter1</button>
            <button onClick={() => setCounter2(counter2 + 1)}>counter2</button>
        </div>
    );
};

