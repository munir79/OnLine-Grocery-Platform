import React from 'react';
import menuImg from '../../assets/menu/banner3.jpg';
import Cover from '../../Shared/Cover';
import SectionTittle from '../../Component/SectionTittle/SectionTittle';
import Hooks from '../../Hooks/Hooks';
import MenuCatagorey from '../../Shared/MenuCatagorey';
import Desert from '../../assets/menu/vegi.jpeg'
import Pizza1 from '../../assets/menu/pizza-bg.jpg';
import salad1 from '../../assets/menu/salad-bg.jpg';
import soup1 from '../../assets/menu/soup-bg.jpg';


const OurMenu = () => {
    const [menu]=Hooks();
    const Vegitables=menu.filter(item=>item.category=="Vegitables");
    const Grains=menu.filter(of=>of.category== "Grains");
    const Dairy=menu.filter(piz=>piz.category=="Dairy");
    const Meat =menu.filter(sal=> sal.category== "Meat");
    const Fruits=menu.filter(sp=>sp.category== "Fruits");

    return (
        <div>
           <Cover img={menuImg} title={"our menu"} ></Cover>
            <SectionTittle Subheading={"Dont Miss"} heading={"Todays Offered"}></SectionTittle>
            <MenuCatagorey item={Vegitables}    ></MenuCatagorey>

            {/* desert */}
            <MenuCatagorey item={Fruits} title={"Fresh "} img={Desert}></MenuCatagorey>
            <MenuCatagorey item={Grains} title={"Pizza"} img={Pizza1}></MenuCatagorey>
            <MenuCatagorey item={Dairy} title={"Salad"} img={salad1}></MenuCatagorey>
            <MenuCatagorey item={Meat} title={"Soup"} img={soup1}></MenuCatagorey>
        </div>
    );
};

export default OurMenu;