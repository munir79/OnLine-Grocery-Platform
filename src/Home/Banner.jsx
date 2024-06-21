import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ban1 from '../assets/home/grr1.jpeg';
import ban2 from '../assets/home/grr2.jpeg';
import ban3 from '../assets/home/grr3.jpeg';
import ban4 from '../assets/home/gr4.jpg';
import ban5 from '../assets/home/gr5.jpg';
import ban6 from '../assets/home/gr6.jpg';
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={ban1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={ban2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={ban3} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={ban4} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={ban5} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={ban6} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    );
};

export default Banner;