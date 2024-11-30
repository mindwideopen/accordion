import React, {KeyboardEvent, useEffect} from 'react';
import styles from '../../styles/Select.module.css'

type ItemType = {
    title: string,
    value: any,
}


type SelectPropsType = {
    value: any;
    onChange: (value: string) => void;
    items: ItemType[];
}

export const Select = (props: SelectPropsType) => {
    console.log(props.value)

    const [active, setActive] = React.useState(false);

    const [hoveredValue, setHoveredValue] = React.useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value)

    const hoveredItem = props.items.find(i => i.value === hoveredValue)

    const toggle = () => setActive(!active);


    useEffect(() => {
        setHoveredValue(props.value)
    }, [props.value])

    const itemClickHandler = (item: ItemType) => {
        props.onChange(item.value)
        toggle()

    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredValue) {
                    const challenger = e.key === 'ArrowDown' ?
                        props.items[i + 1] :
                        props.items[i - 1]
                    if (challenger) {
                        props.onChange(challenger.value)
                        return
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }






return (
    <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={styles.main} onClick={toggle}>{selectedItem && selectedItem.title}</span>
        {
            active &&
            (<div className={styles.items}>
                {props.items.map((i, index) =>
                    <div onMouseEnter={() => setHoveredValue(i.value)}
                         className={(i === hoveredItem ? styles.itemSelected : '')}
                         key={index}
                         onClick={() => itemClickHandler(i)}
                    >{i.title}</div>)}
            </div>)
        }

    </div>


);
}
;

