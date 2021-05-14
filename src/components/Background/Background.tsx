// Outer project imports
import { FunctionComponent } from 'react';

// Inner project imports
import Shape from './Shape/Shape';
import bgFunctions from './functions';

// props interface
export interface BackgroundProps {
    amount: Number
}

const Background: FunctionComponent<BackgroundProps>  = (props: BackgroundProps): JSX.Element => {
    // variables
    /* 
        make a function which generates shapes<Shape> into an array to then render it
    */
    // render
    return (
        <div className="background">
            <ul>
                {bgFunctions.generateShapes(props.amount).map(
                    (shape: JSX.Element, index: number) => {
                        return (
                            <li key={index}>{shape}</li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default Background