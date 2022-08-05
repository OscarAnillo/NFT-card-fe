import AvatarComponent from "./avatar-component";
import ImageComponent from "./image-component";
import TextComponent from "./text-component";

export default function CardComponent(){
    return (
        <div className="card">
            <div className="container">
                <ImageComponent />
                <TextComponent />
                <AvatarComponent />
            </div>
        </div>
    )
}