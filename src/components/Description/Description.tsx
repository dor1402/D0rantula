// Outer project imports
import { FunctionComponent } from "react";
import Typewriter from 'typewriter-effect';

// Inner project imports
import '../../Assets/CSS/Description.css'
import config from '../../config'

const Description: FunctionComponent = () => {
    return (
        <div className="description">
        <Typewriter
        options={{
            delay: 50,
            deleteSpeed: 10,
            loop: true
        }}
            onInit={(typewriter) => {
                config.description.map(
                    (item) => {
                        typewriter.typeString(item)
                        .pauseFor(4000)
                        .deleteAll()
                        .start()
                    }
                )
            }}
        />
        </div>
    )
}

export default Description