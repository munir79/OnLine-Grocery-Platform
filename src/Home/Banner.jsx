import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ban1 from '../assets/home/02.jpg';
import ban2 from '../assets/home/02.jpg';
import ban3 from '../assets/home/03.png';
import ban4 from '../assets/home/04.jpg';
import ban5 from '../assets/home/05.png';
import ban6 from '../assets/home/06.png';
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