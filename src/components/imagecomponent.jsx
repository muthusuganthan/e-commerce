import { catimagelink } from "../assets/image";
import image from "../assets/image.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Imagecompoent = () => {
    return (
        <>
        <p>array</p>
<p>render image via local storage</p>
<img src={image} />


<p>form cdm</p>
<img src={catimagelink} alt="" />



{/* for slowly load image liske lazy images */}

<LazyLoadImage
    alt={catimagelink}
    effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "1s"},
    }}
    src={catimagelink} />


        </>
    )
}

export default Imagecompoent;