import React from "react";

export const Rating = () => {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>
    )
}

type StarPropsType = {
    selected?: boolean
}

const Star = (props: StarPropsType) => {
  return props.selected? <span><b>star </b></span>:<span>star </span>
}
