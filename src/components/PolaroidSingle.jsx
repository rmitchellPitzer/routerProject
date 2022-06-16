import "../css/polaroid.css"

export default function PolaroidSingle(args) {
     return (
            <button className="whitePolaroidBackground2">
                <img id = {args.photoID} className="polaroidImage2" src={args.polaroidImage}></img>
                <div className="polaroidFrontText2" >{args.polaroidFrontText}</div>
            </button>

        );
}