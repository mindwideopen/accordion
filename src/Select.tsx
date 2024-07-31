import React, {useState} from 'react'

import styles from './Select.module.css'


type ItemsType = {
    title: string,
    value: string


}


type SelectPropsType = {
    value?: any,
    onClick: (value: any) => void,
    items: Array<ItemsType>,

}

const Select = (props: SelectPropsType) => {
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

    return (
        <div className={styles.select}>
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
                                 setHoveredElementValue(item.value)}}>
                            {item.title}
                        </div>)}
                </div>}


        </div>)
}
export default Select;