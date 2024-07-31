


import {Rating} from "./Rating";


export default {
    component: Rating,
    title: 'Rating' //отобразит название историй как 'Rating'
};



export const ZeroRating = () => <Rating value={0}></Rating>
export const OneRating = () => <Rating value={1}></Rating>
export const TwoRating = () => <Rating value={2}></Rating>
export const ThreeRating = () => <Rating value={3}></Rating>
export const FourRating = () => <Rating value={4}></Rating>
export const FiveRating = () => <Rating value={5}></Rating>