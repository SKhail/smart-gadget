// Home.js
import React from 'react'
import Newsletter from '../newsletter'
import Banner from '../banner/banner'
import Product from '../product'
import NewItem from '../newItems'
import Corousal from '../corousal/index'
import QuickView from '../quickview'

function Home({ darkMode }) {
  return (
    <>
      <QuickView />
      <NewItem darkMode={darkMode} />
      <Corousal />
      <Banner />
      <Product darkMode={darkMode} />
    </>
  )
}

export default Home
