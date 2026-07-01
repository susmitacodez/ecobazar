import React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Sale from '../components/Sale';
import Hotdeal from '../components/Hotdeal';
import SummerSale from '../components/SummerSale';
import Featured from '../components/Featured';
import LatestNews from '../components/LatestNews';
import Tastimonial from '../components/Tastimonial';
import Headline from '../components/Headline';
import Instagram from '../components/Instagram';

const Home = () => {
  const data = useSelector((state) => state);

  console.log(data);

  return (
    <>
      <Banner />
      <Benefits />
      <Categories/>
      <Product/>
      <Sale/>
      <Hotdeal/>
      <SummerSale/>
      <Featured/>
      <LatestNews/>
      <Tastimonial/>
      <Headline/>
      <Instagram/>
    </>
  );
};

export default Home;