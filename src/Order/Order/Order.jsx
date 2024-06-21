import { useState } from 'react';
import Cover from '../../Shared/Cover';
import orderImg from '../../assets/shop/order1.jpeg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Hooks from '../../Hooks/Hooks';
import OrderCard from '../../OrderCard/OrderCard';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [menu]=Hooks();
    const Vegitables=menu.filter(item=>item.category=="Vegitables");
    const Grains=menu.filter(of=>of.category== "Grains");
    const Dairy=menu.filter(piz=>piz.category=="Dairy");
    const Meat =menu.filter(sal=> sal.category== "Meat");
    const Fruits=menu.filter(sp=>sp.category== "Fruits");

    const [tabIndex,setTabIndex]=useState(0);
    return (
        <div>
            <Cover img={orderImg} title={"Order Food"}></Cover>

            <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className="justify-center">
    <Tab>Vegitables </Tab>
    <Tab>Grains</Tab>
    <Tab>Dairy</Tab>
    <Tab>Meat</Tab>
    <Tab>Fruits</Tab>
  
  </TabList>

  <TabPanel><OrderTab items={Vegitables}></OrderTab> </TabPanel>
  <TabPanel><OrderTab items={Grains}></OrderTab> </TabPanel>
  <TabPanel><OrderTab items={Dairy}></OrderTab></TabPanel>
  <TabPanel><OrderTab items={Meat}></OrderTab> </TabPanel>
  <TabPanel><OrderTab items={Fruits}></OrderTab> </TabPanel>
</Tabs>
            </div>
        </div>
    );
};

export default Order;