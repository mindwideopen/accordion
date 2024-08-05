import React, {useState, KeyboardEvent, useEffect} from 'react'

import styles from './Select.module.css'


type ItemsType = {
    title: string,
    value: string


}


type SelectPropsType = {
    value?: any,
    onClick: (value: string) => void,
    items: Array<ItemsType>,
    setValue: (value: string) => void,

}


const Select = (props: SelectPropsType) => {

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);


    // active это развернут или свернут список опций в селекте
    const [active, setActive] = useState(false)

    // содержит элемент на который наведена мышь
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(item => item.value === props.value)

    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onClick(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
       for (let i=0; i<props.items.length; i++) {
           if (props.items[i].value===hoveredElementValue) {
               if(props.items[i+1]) {
                   props.onClick(props.items[i+1].value)

                   break
               }
               break
           }
       }
    }
const setValue = (value: string) => {
    props.setValue(value)
}
    return (
        <div className={styles.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={styles.main}
                  onClick={toggleItems}>{selectedItem && selectedItem.title}
            </span>

            {
                active &&
                <div className={styles.items}>

                    {props.items.map(item =>
                        <div className={styles.item + ' ' + (hoveredItem === item ? styles.selected : '')}
                             key={item.value}
                             onClick={() => onItemClick(item.value)}
                             onMouseEnter={() => {
                                 setHoveredElementValue(item.value)
                                 setValue(item.value)

                            }}>
                            {item.title}
                        </div>)}
                </div>}


        </div>)
}
export default Select;