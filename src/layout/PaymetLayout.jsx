import React from 'react'
import Nav from "../components/Nav/Nav";
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import BrandSlider from '../components/Brand_Slider/Brand_Slide';
import Payment from '../components/Payment/Payment';

function PaymetLayout() {
  return (
    <section>
        <Nav></Nav>
        <Banner></Banner>
        <BrandSlider></BrandSlider>
        <Payment></Payment>
        <Footer></Footer>
    </section>
  )
}

export default PaymetLayout
