import Banner from "../Banner";
import Box from "./Box";
import Catagorey from "./Catagorey";
import Feature from "./Feature/Feature";
import PopularMeny from "./PopularMenu/PopularMeny";
import Review from "./Review";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Catagorey></Catagorey>
           {/* <Box></Box> */}
           <PopularMeny></PopularMeny>
           <Feature></Feature>
           <Review></Review>
        </div>
    );
};

export default Home;