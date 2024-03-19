// Home.js
import React from 'react'
import Newsletter from "../newsletter";
import Banner from "../banner/banner";
import Product from "../product";
import NewItem from "../newItems";
import Corousal from "../corousal/index";
import QuickView from "../quickview";

function Home() {
  return (
  <>

  <QuickView />
      <NewItem />
      <Corousal />
      <Banner />
      <Product />
  </>)
}

export default Home
