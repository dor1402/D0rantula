// Outer project imports
import { FunctionComponent, useState } from 'react';
// Inner project imports
import bgStyles from '../bgStyles';

const Shape: FunctionComponent = () => {
    // hooks
    const [speed, setSpeed] = useState(Number);
    const [delay, setDelay] = useState(Number);
    const [width, setWidth] = useState(Number);
    const [style, setStyle] = useState(Object);
    const [timer, setTimer] = useState(Number);
    // make it so each shape generates another shape when done

    // main
    setTimer(speed ? speed : 0 + delay ? delay : 0);
    setInterval(() => {setStyle(bgStyles.generateShapeStyles(width, speed, delay))}, timer);

    // render
    return (
        <h1>shape</h1>
        // 
    )
}

export default Shape