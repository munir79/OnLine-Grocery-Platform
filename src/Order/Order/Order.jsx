import { useState } from 'react';
import Cover from '../../Shared/Cover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Hooks from '../../Hooks/Hooks';
import OrderCard from '../../OrderCard/OrderCard';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [menu]=Hooks();
    const offered=menu.filter(item=>item.category=="offered");
    const Desert1=menu.filter(of=>of.category== "dessert");
    const Pizza=menu.filter(piz=>piz.category=="pizza");
    const salad =menu.filter(sal=> sal.category== "salad");
    const soup=menu.filter(sp=>sp.category== "soup");

    const [tabIndex,setTabIndex]=useState(0);
    return (
        <div>
            <Cover img={orderImg} title={"Order Food"}></Cover>

            <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad </Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  
  </TabList>

  <TabPanel>
     <OrderTab items={ salad}></OrderTab>
  </TabPanel>
  <TabPanel><OrderTab items={Pizza}></OrderTab> </TabPanel>
  <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
  <TabPanel><OrderTab items={Desert1}></OrderTab> </TabPanel>
  <TabPanel><OrderTab items={offered}></OrderTab> </TabPanel>
</Tabs>
            </div>
        </div>
    );
};

export default Order;