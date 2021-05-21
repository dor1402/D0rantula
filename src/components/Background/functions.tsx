// Outer project imports

// Inner project imports
import Shape from './Shape/Shape';
/**
 * Generates array of object which looks like: {binaryNumber, X, Y, Size}
 * @param amount how many numbers to return
 * @returns array of objects
 */
const generateShapes = (amount: Number): Array<JSX.Element> => {
    let shapeArrays: Array<JSX.Element> = []
    for (let index = 0; index < amount; index++) {
        shapeArrays.push(<Shape speed={8} delay={2} key={index} />)
    }
    return (
       shapeArrays 
    )
}

interface bgFunctionsInterface {
    generateShapes: Function
}

const bgFunctions: bgFunctionsInterface = {
    generateShapes,
}

export default bgFunctions