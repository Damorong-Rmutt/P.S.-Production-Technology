import React from "react";
import Contact from "../components/Contact/Contact";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import Brand_Slide from "../components/Brand_Slider/Brand_Slide";
import Footer from "../components/Footer/Footer";

function ContactLayout() {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Brand_Slide></Brand_Slide>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default ContactLayout;
