import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";


function App() {



    const[accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const collapseAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }

    const [on, setOn] = useState<boolean>(true);
    const[rating, setRating] = useState<number>(0);

    const selectRating = (value:number) => {
        debugger

        setRating(value)
    }
    console.log(`В стейте рейтинг ${rating}`)

    return (<div className={'wrapper'}>
            <AppTitle/>
            <Rating value={rating} setRating={selectRating}/>
            <Accordion  title={'Accordion'}
                        accordionCollapsed={accordionCollapsed}
                        collapseAccordion={collapseAccordion}/>
            <Rating value={rating} setRating={setRating}/>
            <OnOff status={on} switchButton={setOn}/>

        </div>

    );
}



const AppTitle = () => {
    return <>
        This is react App
    </>
}

// const ButtonWrapper = () => {
//     return(
//         <div>
//             <Button1/>
//         </div>
//     )
// }
//
//
// const Button1 = () =>  {
//     const b1Foo = () => {
//         console.log('b1')
//     }
// }
// const Button2 = () =>  {
//     const b2Foo = () => {
//         console.log('b2')
//     }
// }


export default App;
