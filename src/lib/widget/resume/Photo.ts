import Img, { ImgProps } from "lib/core/tags/Img";

export interface PhotoProps extends ImgProps { }

const Photo = (props: PhotoProps) => Img({
    ...props,
});

export default Photo;