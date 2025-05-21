import Banner from "../components/Banner/Banner";
import Brand_Slide from "../components/Brand_Slider/Brand_Slide";
import BrandProduct from "../components/BrandProduct/BrandProduct";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";



function BrandProductLayout() {
  return (
    <div>
        <Nav></Nav>
        <Banner></Banner>
        <Brand_Slide></Brand_Slide>
        <BrandProduct></BrandProduct>
        <Footer></Footer>
    </div>
  );
}

export default BrandProductLayout;
