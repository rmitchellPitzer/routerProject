import "../css/menu.css"
import Polaroid from "../components/polaroid";
import image1 from "../media/photos/20200214_194305.jpg";
import image2 from "../media/photos/20210520_222508.jpg";
import image3 from "../media/photos/20210525_154130.jpg";
import image4 from "../media/photos/IMG_5367.jpg";
import image5 from "../media/photos/IMG_5663.jpg";
import image6 from "../media/photos/IMG_5686(1).jpg";
import image7 from "../media/photos/IMG_20210206_222937.jpg";
import image8 from "../media/photos/IMG_20210427_183925.jpg";
import image9 from "../media/photos/IMG_20210514_221615_587.jpg";
import image10 from "../media/photos/Snapchat-1055499505.jpg";
import image11 from "../media/photos/brev.jpg";
import image12 from "../media/photos/eva.jpg";
import image13 from "../media/photos/wedding.jpg";
import menuMusic from "../media/music/menuMusic.mp3"


import {Howl, Howler} from 'howler';

import {useState} from "react";
import ReactCardFlip from 'react-card-flip';







// const  handleClick = () => {
//     console.log("Clicked!")
// }

let soundToggle = 1

export default function Menu() {
    const [isPhotoPressed, setPhotoPressed] = useState(0)
    const [isMusicPlayable, setMusicPlayable] = useState(false)

    let sound = new Howl({
    src: [menuMusic]
    });

    if(isMusicPlayable && soundToggle == 1){
    sound.play();
    soundToggle = 0
    }

    const  handleClick = (arg) => {
        setPhotoPressed(arg)
        setMusicPlayable(true)
    }

    return (
        <div>
            <div className="background"></div>
            <div className="menuFlexContainer">
                <div className="appTitle">Because polaroids suck.</div>

                <ReactCardFlip isFlipped={isPhotoPressed === 1} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(1)}>
                        <Polaroid
                        polaroidFrontText = "Valentine's Day"
                        polaroidBackText = "That's you on Valentine's Day! I remember this day fondly, not only because it was a super fun day, but also because you had me try the best curry I've ever had"
                        polaroidImage = {image1}
                        isFlipped =  {false}
                        id = {1} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Valentine's Day"
                            polaroidBackText = "That's you on Valentine's Day! I remember this day fondly, not only because it was a super fun day, but also because you had me try the best curry I've ever had"
                            polaroidImage = {image1}
                            isFlipped =  {true}
                            id = {1} />
                    </button>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={isPhotoPressed === 2} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(2)}>
                        <Polaroid
                            polaroidFrontText = "Cold evenings"
                            polaroidBackText = "This is us at your old (at the time new) apartment! I need a trim..."
                            polaroidImage = {image2}
                            isFlipped =  {false}
                            id = {2} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Cold evenings"
                            polaroidBackText = "This is us at your old (at the time new) apartment! I need a trim..."
                            polaroidImage = {image2}
                            isFlipped =  {true}
                            id = {2} />
                    </button>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={isPhotoPressed === 3} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(3)}>
                        <Polaroid
                            polaroidFrontText = "At the aquarium"
                            polaroidBackText = "That's you staring at a school of fish. I will never forget your reaction to the sea otters and putting your hand to their paw. It is one of my favorite memories."
                            polaroidImage = {image3}
                            isFlipped =  {false}
                            id = {1} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "At the aquarium"
                            polaroidBackText = "That's you staring at a school of fish. I will never forget your reaction to the sea otters and putting your hand to their paw. It is one of my favorite memories."
                            polaroidImage = {image3}
                            isFlipped =  {true}
                            id = {1} />
                    </button>

                </ReactCardFlip>

                <ReactCardFlip isFlipped={isPhotoPressed === 4} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(4)}>
                        <Polaroid
                            polaroidFrontText = "The love of my life"
                            polaroidBackText = "Hey who's that! I remember taking tons of photos of you on that day, but this is one of my favorite photos I've ever took of you"
                            polaroidImage = {image4}
                            isFlipped =  {false}
                            id = {1} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "The love of my life"
                            polaroidBackText = "Hey who's that! I remember taking tons of photos of you on that day, but this is one of my favorite photos I've ever took of you"
                            polaroidImage = {image4}
                            isFlipped =  {true}
                            id = {1} />
                    </button>
                </ReactCardFlip>


                <ReactCardFlip isFlipped={isPhotoPressed === 5} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(5)}>
                        <Polaroid
                            polaroidFrontText = "Fit check"
                            polaroidBackText = "This was in my wardrobe/closet/whatever. Look how cute we look!"
                            polaroidImage = {image5}
                            isFlipped =  {false}
                            id = {1} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Fit check"
                            polaroidBackText = "This was in my wardrobe/closet/whatever. Look how cute we look!"
                            polaroidImage = {image5}
                            isFlipped =  {true}
                            id = {1} />
                    </button>
                </ReactCardFlip>



                <ReactCardFlip isFlipped={isPhotoPressed === 6} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(6)}>
                        <Polaroid
                            polaroidFrontText = "Nap dates"
                            polaroidBackText = "That's us sleeping! Still amazes me I pull you closer when I'm asleep"
                            polaroidImage = {image6}
                            isFlipped =  {false}
                            id = {1} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Nap dates"
                            polaroidBackText = "That's us sleeping! Still amazes me I pull you closer when I'm asleep"
                            polaroidImage = {image6}
                            isFlipped =  {true}
                            id = {1} />
                    </button>
                </ReactCardFlip>



                <ReactCardFlip isFlipped={isPhotoPressed === 7} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(7)}>
                        <Polaroid
                            polaroidFrontText = "Relaxing together"
                            polaroidBackText = "Hey who's that? I look dead focused on whatever game I'm playing in that photo."
                            polaroidImage = {image7}
                            isFlipped =  {false}
                            id = {1} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Relaxing together"
                            polaroidBackText = "Hey who's that? I look dead focused on whatever game I'm playing in that photo."
                            polaroidImage = {image7}
                            isFlipped =  {true}
                            id = {1} />
                    </button>
                </ReactCardFlip>


                <ReactCardFlip isFlipped={isPhotoPressed === 8} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(8)}>
                        <Polaroid
                            polaroidFrontText = "Skating in the colleges"
                            polaroidBackText = "This was taken at Claremont McKenna college! I remember giving you the helmet because I was so scared you would fall."
                            polaroidImage = {image8}
                            isFlipped =  {false}
                            id = {1} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Skating in the colleges"
                            polaroidBackText = "This was taken at Claremont McKenna college! I remember giving you the helmet because I was so scared you would fall."
                            polaroidImage = {image8}
                            isFlipped =  {true}
                            id = {1} />
                    </button>
                </ReactCardFlip>



                <ReactCardFlip isFlipped={isPhotoPressed === 9} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(9)}>
                        <Polaroid
                            polaroidFrontText = "Dinner on Yale"
                            polaroidBackText = "And that's me! I loved going on this date with you. You can't see how much I'm smiling under that mask."
                            polaroidImage = {image9}
                            isFlipped =  {false}
                            photoID = "moveYDirection2"  />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Dinner on Yale"
                            polaroidBackText = "And that's me! I loved going on this date with you. You can't see how much I'm smiling under that mask."
                            polaroidImage = {image9}
                            isFlipped =  {true}
                            photoID = "moveYDirection2" />
                    </button>
                </ReactCardFlip>


                <ReactCardFlip isFlipped={isPhotoPressed === 10} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(10)}>
                        <Polaroid
                            polaroidFrontText = "Shopping in Popkiller"
                            polaroidBackText = "That's us in Little Tokyo! We bought matching clothes at PopKiller"
                            polaroidImage = {image10}
                            isFlipped =  {false}
                            photoID = "moveYDirection" />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Shopping in Popkiller"
                            polaroidBackText = "That's us in Little Tokyo! We bought matching clothes at PopKiller"
                            polaroidImage = {image10}
                            isFlipped =  {true}
                            photoID = "moveYDirection" />
                    </button>
                </ReactCardFlip>








                <ReactCardFlip isFlipped={isPhotoPressed === 11} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(11)}>
                        <Polaroid
                            polaroidFrontText = "Working together"
                            polaroidBackText = "While we did get in trouble at the time, I still have fond memories of dancing together in Paradis behind the counter."
                            polaroidImage = {image11}
                            isFlipped =  {false}
                            photoID = "moveXDirection"/>
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Working together"
                            polaroidBackText = "While we did get in trouble at the time, I still have fond memories of dancing together in Paradis behind the counter."
                            polaroidImage = {image11}
                            isFlipped =  {true}
                            photoID = "moveXDirection" />
                    </button>

                </ReactCardFlip>









                <ReactCardFlip isFlipped={isPhotoPressed === 12} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(12)}>
                        <Polaroid
                            polaroidFrontText = "At the arcade"
                            polaroidBackText = "I really loved when you showed me what games you liked, and we were playing them together. I will always admire how good you are at Taiko no Tatsujin
"
                            polaroidImage = {image12}
                            isFlipped =  {false}
                            id = {1} />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid

                            polaroidFrontText = "At the arcade"
                            polaroidBackText = "I really loved when you showed me what games you liked, and when we'd play them together. I will always admire how good you are at Taiko no Tatsujin
"                           polaroidImage = {image12}
                            isFlipped =  {true}
                            id = {1} />
                    </button>

                </ReactCardFlip>






                <ReactCardFlip isFlipped={isPhotoPressed === 13} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1.3}>
                    <button className="transparentPolaroidButton" onClick={() => handleClick(13)}>
                        <Polaroid
                            polaroidFrontText = "Avery's wedding"
                            polaroidBackText = "I always loved how happy you and I look in these photos! I had so much fun with you that day"
                            polaroidImage = {image13}
                            isFlipped =  {false}
                            photoID = "moveYDirection2" />
                    </button>

                    <button className="transparentPolaroidButton" onClick={() => setPhotoPressed(0)}>
                        <Polaroid
                            polaroidFrontText = "Avery's wedding"
                            polaroidBackText = "I always loved how happy you and I look in these photos! I had so much fun with you that day"
                            polaroidImage = {image13}
                            isFlipped =  {true}
                            photoID = "moveYDirection2" />
                    </button>

                </ReactCardFlip>







            </div>
        </div>
    );
}