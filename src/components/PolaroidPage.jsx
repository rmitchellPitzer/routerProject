import "../css/polaroidPage.css"
import {useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";
import Polaroid from "./polaroid";
import image9 from "../media/photos/IMG_20210514_221615_587.jpg";
import ReactCardFlip from "react-card-flip";
import {Link, useNavigate} from "react-router-dom";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import image1 from "../media/photos/20200214_194305.jpg";
import PolaroidSingle from "./PolaroidSingle";
import photoMusic1 from "../media/music/photoMusic1.mp3"
import photoMusic2 from "../media/music/photoMusic2.mp3"
import photoMusic3 from "../media/music/photoMusic3.mp3"
import photoMusic4 from "../media/music/photoMusic4.mp3"
import photoMusic5 from "../media/music/photoMusic5.mp3"



import {Howl, Howler} from 'howler';
import menuMusic from "../media/music/menuMusic.mp3";


let soundToggle = 1


export default function PolaroidPage(args) {
    const [isPressed, setIsPressed] = useState("polaroidPageButtonFrame1");
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const [whiteBackgroundOn, setWhiteBackgroundOn] = useState(true);
    const [whiteBackgroundOff, setWhiteBackgroundOff] = useState(false);
    const [isMusicPlayable, setMusicPlayable] = useState(false)


    let buttonClassName = "polaroidPageButtonFrame1"
    if(isPressed === "polaroidPageButtonFrame3"){
            setTimeout(function(){
                setWhiteBackgroundOn(false);
                },2000);
    }

    let songToPlayNumber = Math.floor(Math.random() * 5) + 1;
    let songToPlay;

    if(songToPlayNumber == 5){
        songToPlay = photoMusic5
    }
    else if(songToPlayNumber == 4){
        songToPlay = photoMusic4
    }
    else if(songToPlayNumber == 3){
        songToPlay = photoMusic3
    }
    else if(songToPlayNumber == 2){
        songToPlay = photoMusic2
    }
    else{
        songToPlay = photoMusic1
    }

    let polaroidSound = new Howl({
        src: [songToPlay]
    });

    if(isPressed === "polaroidPageButtonFrame3" && soundToggle == 1){

        polaroidSound.play();
        soundToggle = 0
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/menu");
    }

    if(whiteBackgroundOn === true){
    return(
        <div className="preventOverflow">
            <div className="pressMeText">Press me!</div>
            <button onTouchStart={() => {setIsPressed("polaroidPageButtonFrame2")}} onTouchEnd ={() => {setIsPressed("polaroidPageButtonFrame3")}} className="polaroidPageButton"></button>
            <div className={isPressed}></div>


            <div className="polaroidPageBackground"></div>
            </div>
    );
    }
    else{
        setTimeout(function(){
            setWhiteBackgroundOff(true);
        },2000);
        return(
            <div>
                <div className={whiteBackgroundOff + "1"}></div>

                <nav>
                    <div className="navButton">
                        {/*<button className="asdf" onClick={() => Howler.stop()}>*/}
                    <Link onClick={() => Howler.stop()} className="navButton" to="/menu">
                        <FontAwesomeIcon icon={faArrowLeft} />
                                Press here to view other photos!
                    </Link> {" "}
                        {/*</button>*/}
                </div>
                </nav>

                <div className="polaroidPageText">{args.polaroidBackText}</div>
                <div className="menuFlexContainer2">
                    <PolaroidSingle
                        polaroidFrontText = {args.polaroidFrontText}
                        polaroidImage = {args.polaroidImage}
                        isFlipped =  {false}
                        photoID = {args.photoID} />
                </div>




                <div className="polaroidPageBackground"></div>
            </div>
        );
    }
}