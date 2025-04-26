import "./Navlink.css";


type NavlinkProps = {
    imageUrl: string;
    text: string;
  };

export function Navlink({imageUrl, text}: NavlinkProps) {
    return (
        <div className="navlink">
        <div className="">
            <img src={imageUrl} alt="Logo" />
        </div>
        <div className="">
            <p className="body-emphasized-14pt">{text}</p>
        </div>
    </div>
    )
}