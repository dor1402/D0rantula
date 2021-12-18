// Outer project imports

// Inner project imports
import '../../Assets/CSS/SocialMedia.css'
import { ISocialeMediaProps } from "../../Interfaces/ISocialMedia";

const SocialMedia = (props: ISocialeMediaProps) => {
    return (
        <a href={props.link} style={{color:"whitesmoke"}}>
            {props.icon}
        </a>
    )
}

export default SocialMedia