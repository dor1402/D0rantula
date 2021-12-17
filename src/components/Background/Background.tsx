// Outer project imports
import { FunctionComponent } from 'react';

// Inner project imports
import bgFunctions from './functions';
import '../../Assets/CSS/Background.css';

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
            <ul className="box-area">
                {bgFunctions.generateShapes(props.amount).map(
                    (shape: JSX.Element) => {
                        return (
                            shape
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default Background