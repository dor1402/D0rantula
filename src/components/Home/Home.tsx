// Outer project imports
import Slide from '@material-ui/core/Slide';
import { useState, useEffect, FunctionComponent } from 'react';

// Inner project imports
import '../../Assets/CSS/Home.css';
import finalLogo from '../../Assets/Images/finalLogo.png';
import config from '../../config';
import Description from '../Description/Description';
import SocialMedia from '../Social/Social';


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
                        <img className={"logo"} src={finalLogo} alt="logo" />
                        <Description />
                            <h1>dir</h1>
                        {config.socials.map(
                            (item) => {
                                return (
                                    <SocialMedia icon={item.icon} link={item.link}/>
                                )
                            }
                        )}
                    </div>
                </Slide>
            </div >
        </>

    )
}

export default Home