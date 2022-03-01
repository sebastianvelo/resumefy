import ComponentStyle from "lib/core/components/ComponentStyle";
import Img, { ImgProps } from "lib/core/tags/Img";

export interface PhotoProps extends ImgProps { }

const Photo = (props: PhotoProps, style: ComponentStyle) => Img({
    ...props,
    style
});

export default Photo;