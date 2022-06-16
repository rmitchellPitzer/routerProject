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
import cat from "../media/photos/cat.jpg"

export default function InfoScreen(args) {
    const [isPressed, setIsPressed] = useState("polaroidPageButtonFrame1");
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const [whiteBackgroundOn, setWhiteBackgroundOn] = useState(true);
    const [whiteBackgroundOff, setWhiteBackgroundOff] = useState(false);

        return(
            <div>
                <div className="infoTitle">
                    Hello! Each picture has a NFC (NFC, not NFT) tag behind it. Scan the tag with your phone by
                    tapping the phone against the photo (similar to how Apple pay works), and see what message it shows!
                </div>
                <img className="infoImage" src={cat}></img>

                <div className="polaroidPageBackground"></div>
            </div>
        );
}