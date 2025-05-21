import Banner from "../components/Banner/Banner";
import Brand_Slide from "../components/Brand_Slider/Brand_Slide";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Category from "../components/Category/Category";
import PromotionMain from "../components/PromotionMain/PromotionMain";

function PromotionLayout() {
  return (
      <div>
          <Nav></Nav>
          <Banner></Banner>
          <Brand_Slide></Brand_Slide>
          <PromotionMain></PromotionMain>
          <Footer></Footer>
      </div>
    );
}

export default PromotionLayout;
