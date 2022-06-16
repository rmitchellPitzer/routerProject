import "../css/polaroid.css"



export default function Polaroid(args) {

    if(args.isFlipped == false){
    return (
        <button className="whitePolaroidBackground">
            <img id = {args.photoID} className="polaroidImage" src={args.polaroidImage}></img>
            <div className="polaroidFrontText" >{args.polaroidFrontText}</div>
        </button>

    );}
    else{
        return (
            <button className="whitePolaroidBackground">
                <div className="polaroidBackText" >{args.polaroidBackText}</div>
            </button>
        );
    }
}