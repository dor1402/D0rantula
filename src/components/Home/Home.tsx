// Outer project imports
import Slide from '@material-ui/core/Slide';
import { useState, useEffect, createRef, FunctionComponent} from 'react';

// Inner project imports
import '../../Assets/CSS/Home.css';
import finalLogo from '../../Assets/Images/finalLogo.png';
import coolLogo from '../../Assets/Images/coolLogo.png'


const Home: FunctionComponent = () => {
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
                <h1 style={{color: "whitesmoke"}}>kobi ma boy</h1>
                </div>
            </Slide>
        </div >
        
    )
}

export default Home