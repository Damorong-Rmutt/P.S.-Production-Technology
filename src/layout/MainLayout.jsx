import Banner from "../components/Banner/Banner";
import Brand_Slide from "../components/Brand_Slider/Brand_Slide";
import CategorySection from "../components/CategorySection/CategorySection";
import Footer from "../components/Footer/Footer";
import Line from "../components/Line/Line";
import Nav from "../components/Nav/Nav";
import Promotion from "../components/Promotion/Promotion";
import BrandCategory from "../components/BrandCategory/BrandCategory";
import PromotionPage from "../components/PromotionPage/PromotionPage";
import WhatsNew from "../components/WhatNew/WhatNew";


function MainLayout() {
  return (
    <section>
        <Nav></Nav>
        <Banner></Banner>
        <Brand_Slide></Brand_Slide>
        <CategorySection></CategorySection>
        <Promotion></Promotion>
        <Line></Line>
        <BrandCategory></BrandCategory>
        <PromotionPage></PromotionPage>
        <WhatsNew></WhatsNew>
        <Footer></Footer>
    </section>
  );
}

export default MainLayout;
