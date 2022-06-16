import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Menu from "./routes/menu";
import PolaroidPage from "./components/PolaroidPage";
import image1 from "./media/photos/20200214_194305.jpg";
import image2 from "./media/photos/20210520_222508.jpg";
import image3 from "./media/photos/20210525_154130.jpg";
import image4 from "./media/photos/IMG_5367.jpg";
import image5 from "./media/photos/IMG_5663.jpg";
import image6 from "./media/photos/IMG_5686(1).jpg";
import image7 from "./media/photos/IMG_20210206_222937.jpg";
import image8 from "./media/photos/IMG_20210427_183925.jpg";
import image9 from "./media/photos/IMG_20210514_221615_587.jpg";
import image10 from "./media/photos/Snapchat-1055499505.jpg";
import image13 from "./media/photos/wedding.jpg";
import image12 from "./media/photos/eva.jpg";
import image11 from "./media/photos/brev.jpg";
import InfoScreen from "./components/infoScreen";


const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="/routerProject/menu" element={<Menu />} />




                <Route path="/routerProject/image1" element={<PolaroidPage
                    polaroidFrontText = "Valentine's Day"
                    polaroidBackText = "That's you on Valentine's Day! I remember this day fondly, not only because it was a super fun day, but also because you had me try the best curry I've ever had"
                    polaroidImage = {image1}
                    isFlipped =  {false}
                    id = {1}
                />} />

                <Route path="/routerProject/image2" element={<PolaroidPage
                    polaroidFrontText = "Cold evenings"
                    polaroidBackText = "This is us at your old (at the time new) apartment! I need a trim..."
                    polaroidImage = {image2}
                    isFlipped =  {false}
                    id = {1}
                />} />

                <Route path="/routerProject/image3" element={<PolaroidPage
                    polaroidFrontText = "At the aquarium"
                    polaroidBackText = "That's you staring at a school of fish. I will never forget your reaction to the sea otters and putting your hand to their paw. It is one of my favorite memories."
                    polaroidImage = {image3}
                    isFlipped =  {false}
                    id = {1} />
                }
                />} />

                <Route path="/routerProject/image4" element={<PolaroidPage
                    polaroidFrontText = "The love of my life"
                    polaroidBackText = "Hey who's that! I remember taking tons of photos of you on that day, but this is one of my favorite photos I've ever took of you"
                    polaroidImage = {image4}
                    isFlipped =  {false}
                    id = {1} />
                }
                />} />

                <Route path="/routerProject/image5" element={<PolaroidPage
                    polaroidFrontText = "Fit check"
                    polaroidBackText = "This was in my wardrobe/closet/whatever. Look how cute we look!"
                    polaroidImage = {image5}
                    isFlipped =  {false}
                    id = {1} />} />

                <Route path="/routerProject/image6" element={<PolaroidPage
                    polaroidFrontText = "Nap dates"
                    polaroidBackText = "That's us sleeping! Still amazes me I pull you closer when I'm asleep"
                    polaroidImage = {image6}
                    isFlipped =  {false}
                    id = {1} />} />

                <Route path="/routerProject/image7" element={<PolaroidPage
                    polaroidFrontText = "Relaxing together"
                    polaroidBackText = "Hey who's that? I look dead focused on whatever game I'm playing in that photo."
                    polaroidImage = {image7}
                    isFlipped =  {false}
                    id = {1} />} />

                <Route path="/routerProject/image8" element={<PolaroidPage
                    polaroidFrontText = "Skating in the colleges"
                    polaroidBackText = "This was taken at Claremont McKenna college! I remember giving you the helmet because I was so scared you would fall."
                    polaroidImage = {image8}
                    isFlipped =  {false}
                    id = {1} />} />

                <Route path="/routerProject/image9" element={<PolaroidPage
                    polaroidFrontText = "Dinner on Yale"
                    polaroidBackText = "And that's me! I loved going on this date with you. You can't see how much I'm smiling under that mask."
                    polaroidImage = {image9}
                    isFlipped =  {false}
                    photoID = "moveYDirection2"  />} />

                <Route path="/routerProject/image10" element={<PolaroidPage
                    polaroidFrontText = "Shopping in Popkiller"
                    polaroidBackText = "That's us in Little Tokyo! We bought matching clothes at PopKiller"
                    polaroidImage = {image10}
                    isFlipped =  {false}
                    photoID = "moveYDirection"  />} />


                <Route path="/routerProject/image11" element={<PolaroidPage
                    polaroidFrontText = "Working together"
                    polaroidBackText = "While we did get in trouble at the time, I still have fond memories of dancing together in Paradis behind the counter."
                    polaroidImage = {image11}
                    isFlipped =  {false}
                    id = {1} />} />

                <Route path="/routerProject/image12" element={<PolaroidPage
                    polaroidFrontText = "At the arcade"
                    polaroidBackText = "I really loved when you showed me what games you liked, and when we'd play them together. I will always admire how good you are at Taiko no Tatsujin
"                   polaroidImage = {image12}
                    isFlipped =  {false}
                    id = {1} />} />

                <Route path="/routerProject/image13" element={<PolaroidPage
                    polaroidFrontText = "Avery's wedding"
                    polaroidBackText = "I always loved how happy you and I look in these photos! I had so much fun with you that day"
                    polaroidImage = {image13}
                    isFlipped =  {false}
                    photoID = "moveYDirection2" />} />

                <Route path="/routerProject/info" element={<InfoScreen/>}/>




                <Route
                    path="*"
                    element={<InfoScreen/>}
                />
            </Route>
        </Routes>
    </BrowserRouter>
);