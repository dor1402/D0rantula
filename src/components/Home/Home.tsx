// Outer project imports
import Slide from '@material-ui/core/Slide';
import { useState, useEffect, FunctionComponent} from 'react';

// Inner project imports
import '../../Assets/CSS/Home.css';
import finalLogo from '../../Assets/Images/finalLogo.png';
import Description from '../Description/Description';


const Home: FunctionComponent = () => {
    // variables

    // hooks
    const [checked, setChecked] = useState(false);


    // main
    useEffect(() => {
        setChecked(true)
    }, []);

    // render
    return ( 
        <>
        <div className="container">
            <Slide direction="up" in={checked} timeout={1000} mountOnEnter unmountOnExit>
                <div className="slide">
                <img className={"logo"} src={finalLogo} alt="logo"/>
                <Description />
                {/* <h1 style={{color: "whitesmoke"}}>kobi ma boy</h1> */}

                </div>
            </Slide>
        </div >
        </>
        
    )
}

export default Home