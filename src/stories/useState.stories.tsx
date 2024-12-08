import React, { useState} from "react";

export default {
    title: 'useState demo'
}

const generateData = () => {
    console.log('Generate Data');
    return 3213547537
}

export const Example1 = () => {
    console.log('Example1')


    const [counter, setCounter] = useState(generateData);
    const changer = (state:number) => state+1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}
