import "./Loading.css";
interface ILoaderProps {
    src: string;
    alt?: string;
    size?: number;
    borderSize?: number;
    borderColor?: string;
    speed?: number;
    height?: number;
    width?: number;
    
}

export const Loading = ({
    src,
    alt = "Loading image",
    size = 80,
    borderSize = 4,
    borderColor = "#1976d2"
}: ILoaderProps) => {
    return (
        <div className="image-loader"
            style={{
                width: size,
                height: size,
                borderWidth: `${borderSize}`,
                borderColor: `${borderColor}`,
            }}
        >
            <img src={src} alt={alt} className="image" />
        </div>
    )
}