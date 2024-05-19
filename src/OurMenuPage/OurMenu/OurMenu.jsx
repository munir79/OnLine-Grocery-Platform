import React from 'react';
import menuImg from '../../assets/menu/banner3.jpg';
import Cover from '../../Shared/Cover';
import SectionTittle from '../../Component/SectionTittle/SectionTittle';
import Hooks from '../../Hooks/Hooks';
import MenuCatagorey from '../../Shared/MenuCatagorey';
import Desert from '../../assets/menu/dessert-bg.jpeg'
import Pizza1 from '../../assets/menu/pizza-bg.jpg';
import salad1 from '../../assets/menu/salad-bg.jpg';
import soup1 from '../../assets/menu/soup-bg.jpg';


const OurMenu = () => {
    const [menu]=Hooks();
    const offered=menu.filter(item=>item.category=="offered");
    const Desert1=menu.filter(of=>of.category== "dessert");
    const Pizza=menu.filter(piz=>piz.category=="pizza");
    const salad =menu.filter(sal=> sal.category== "salad");
    const soup=menu.filter(sp=>sp.category== "soup");

    return (
        <div>
           <Cover img={menuImg} title={"our menu"} ></Cover>
            <SectionTittle Subheading={"Dont Miss"} heading={"Todays Offered"}></SectionTittle>
            <MenuCatagorey item={offered}    ></MenuCatagorey>

            {/* desert */}
            <MenuCatagorey item={Desert1} title={"Desert"} img={Desert}></MenuCatagorey>
            <MenuCatagorey item={Pizza} title={"Pizza"} img={Pizza1}></MenuCatagorey>
            <MenuCatagorey item={salad} title={"Salad"} img={salad1}></MenuCatagorey>
            <MenuCatagorey item={soup} title={"Soup"} img={soup1}></MenuCatagorey>
        </div>
    );
};

export default OurMenu;