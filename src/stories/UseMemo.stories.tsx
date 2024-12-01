import React, {useMemo} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCounting= () => {
    const [a, setA] = React.useState(3)
    const [b, setB] = React.useState(3)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {          // запомни tempResultA и не пересчитывай, пока не изменится [a]
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 30000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>

        <div>
            Result for A:{resultA}
        </div>

        <div>
            Result for B:{resultB}
        </div>
    </>
}