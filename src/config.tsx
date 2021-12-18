// Outer project imports
import { GitHub, LinkedIn } from "@mui/icons-material"


const config = {
    colorOpacity: 0.1,

    minSpeed: 20,
    maxSpeed: 3,

    minSize: 5,
    maxSize: 15,

    minDelay: 0,
    maxDelay: 4,

    minLeft: 0,
    maxLeft: 85,

    description: [
        'Hello! my name is Dor and I am a Full Stack Web Developer :)',
        'I use are NextJS, Python, Node, c# and both relational/non relational databases.',
        'I am also familiar with both Windows and Linux operating systems.',
        'Here are some of the project I have worked on, enjoy!'
    ],
    socials: [
        {icon: <LinkedIn/>, link: 'https://linkedin.com/in/dor-dvir-raviv'},
        {icon: <GitHub/>, link: 'https://github.com/dor1402'}
    ]
}
export default config