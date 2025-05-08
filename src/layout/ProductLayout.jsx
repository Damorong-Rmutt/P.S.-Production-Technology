import Banner from "../components/Banner/Banner";
import Brand_Slide from "../components/Brand_Slider/Brand_Slide";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Category from "../components/Category/Category";


function ProductLayout() {
  return (
      <section>
          <Nav></Nav>
          <Banner></Banner>
          <Brand_Slide></Brand_Slide>
          <Category></Category>
          <Footer></Footer>
      </section>
    );
}

export default ProductLayout;
