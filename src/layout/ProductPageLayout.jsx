import React from 'react'
import Navbar from '../components/Nav/Nav'
import BannerSlider from '../components/Banner/Banner'
import BrandSlider from '../components/Brand_Slider/Brand_Slide'
import ProductPage from '../components/Product/ProductPage'
import Footer from '../components/Footer/Footer'

function ProductPageLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <BannerSlider></BannerSlider>
        <BrandSlider></BrandSlider>
        <ProductPage></ProductPage>
        <Footer></Footer>
    </div>
  )
}

export default ProductPageLayout
