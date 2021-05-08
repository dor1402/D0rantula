// Outer project imports
import Slide from '@material-ui/core/Slide';
import { useState, useEffect, createRef } from 'react';

// Inner project imports
import '../../Assets/CSS/Home.css';
import finalLogo from '../../Assets/Images/finalLogo.png';
import coolLogo from '../../Assets/Images/coolLogo.png'


const Home = () => {
    // variables
    const ref = createRef();

    // hooks
    const [checked, setChecked] = useState(false);


    // main
    useEffect(() => {
        setChecked(true)
    }, []);

    // render
    return ( 
        <div className="container">
            <Slide direction="up" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                <div className="slide">
                <img className={"logo"} src={finalLogo} alt="logo"/>
                </div>
            </Slide>
            <h1 className={"header"}>D0rantula</h1>
        </div >
        
    )
}

export default Home