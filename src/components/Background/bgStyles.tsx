

/**
 * Creates a css object which conatins the styles for the moving shapes in the background
 * @param left how much to move the shape to the left
 * @param width the width of the shape
 * @param speed the speed of the shape
 * @param delay the delay before the shape begins to move
 * @returns object which contains css of the shape
 */
const generateShapeStyles = (left: number, width: number, height: number, speed: number, delay: number) => {
    return (
        {
            // the css of a li element which is displayd in the dom as a shape
            left: `${left}%`,
            color: 'whitesmoke !important',
            background: 'whitesmoke !important',
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `75px`,
            animationDelay: `${delay}s`,
            animationDuration: `${speed}s`,
        }
    )

}


/**
 * Generates a random number between min and max for style usings in the Shape component
 * @param min the minimum value which can be returned
 * @param max the maximum value which can be returned
 * @returns a random natural value between min (will be bigger than 0) and max
 */
const generateRandomStyleNumber = (min: number, max: number) => {
    const rand = Math.random()
    const flooredRand: number = Math.floor(rand * max + 1)
    return (
        flooredRand > min ? flooredRand : min
    )
}

const bgStyles = {
    generateShapeStyles,
    generateRandomStyleNumber
}

export default bgStyles

