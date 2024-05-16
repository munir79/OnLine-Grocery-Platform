import React from 'react';
import menuImg from '../../assets/menu/banner3.jpg';
import Cover from '../../Shared/Cover';
import SectionTittle from '../../Component/SectionTittle/SectionTittle';
import Hooks from '../../Hooks/Hooks';
import MenuCatagorey from '../../Shared/MenuCatagorey';


const OurMenu = () => {
    const [menu]=Hooks();
    const offered=menu.filter(itm=>itm.category=="salad");
    return (
        <div>
           <Cover img={menuImg}title={"our menu"} ></Cover>
            <SectionTittle Subheading={"Dont Miss"} heading={"Todays Offered"}></SectionTittle>
            <MenuCatagorey item={offered}></MenuCatagorey>
        </div>
    );
};

export default OurMenu;