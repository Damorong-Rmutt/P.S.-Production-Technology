import React from "react";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import Brand_Slide from "../components/Brand_Slider/Brand_Slide";
import Footer from "../components/Footer/Footer";
import CategoryPage from "../components/CategoryPage/CategoryPage";

function CategoryPageLayout() {
  return (
    <section>
      <Nav></Nav>
      <Banner></Banner>
      <Brand_Slide></Brand_Slide>
      <CategoryPage></CategoryPage>
      <Footer></Footer>
    </section>
  );
}

export default CategoryPageLayout;
