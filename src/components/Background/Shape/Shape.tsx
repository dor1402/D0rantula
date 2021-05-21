// Outer project imports
import { FunctionComponent, useState, useEffect } from 'react';
// Inner project imports
import bgStyles from '../bgStyles';
import config from '../../../config';
import updateInterface from './updateInterface';

export interface ShapeProps {
    speed: number,
    delay: number
}

const Shape: FunctionComponent<ShapeProps> = (props: ShapeProps) => {
    // hooks
    const [speed, setSpeed] = useState(props.speed);
    const [height, setHeight] = useState(Number);
    const [delay, setDelay] = useState(props.delay);
    const [width, setWidth] = useState(Number);
    const [left, setLeft] = useState(Number)
    const [style, setStyle] = useState(Object);
    const [timer, setTimer] = useState(speed + delay);
    
    // variables
    const updater = [ // array which contains object from the updateInterface interface
        {cb: setSpeed, min: config.minSpeed, max: config.maxSpeed},
        {cb: setHeight, min: config.minSize, max: config.maxSize},
        {cb: setWidth, min: config.minSize, max: config.maxSize},
        {cb: setDelay, min: config.minDelay, max: config.maxDelay},
        {cb: setLeft, min: config.minLeft, max: config.maxLeft}
    ]
    

    // main

    useEffect(() => {
        setTimeout(() => {
            // set all the styles
            updater.map(
                (update: updateInterface) => {
                    update.cb(bgStyles.generateRandomStyleNumber(update.min, update.max))
                }
            )
            setStyle(bgStyles.generateShapeStyles(left, width, height, speed, delay))
            console.log(style)
            console.log(timer)
            console.log(bgStyles.generateShapeStyles(left, width, height, speed, delay))
            setStyle(bgStyles.generateShapeStyles(left, width, height, speed, delay))
            setTimer(speed + delay)
        }, timer*1000);
        // setInterval(() => {
        //     // set all the styles
        //     updater.map(
        //         (update: updateInterface) => {
        //             update.cb(bgStyles.generateRandomStyleNumber(update.min, update.max))
        //         }
        //     )
        //     setStyle(bgStyles.generateShapeStyles(left, width, height, speed, delay))
        //     console.log(style)
        //     console.log("dor")
        //     setStyle(bgStyles.generateShapeStyles(left, width, height, speed, delay))
        // }, timer*1000);
        return () => {
           clearInterval() 
        }
    }, [])
    
    

    // render
    return (
        <li className={style}>shape</li>
        // 
    )
}

export default Shape