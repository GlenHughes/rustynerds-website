import React from "react";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css"

import Layout from "../components/layout";
import SEO from "../components/seo";
import slide1 from "../images/slider/01.png"
import slide2 from "../images/slider/02.png"
import slide3 from "../images/slider/03.png"
import slide4 from "../images/slider/04.png"
import slide5 from "../images/slider/05.png"

const images = [
 {
   original: slide1,
   thumbnail: slide1,
 },
 {
   original: slide2,
   thumbnail: slide2,
 },
 {
   original: slide3,
   thumbnail: slide3,
 },
 {
   original: slide4,
   thumbnail: slide4,
 },
 {
   original: slide5,
   thumbnail: slide5,
 },
]


function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`]}
      />
      <div className="text-center">
        <ImageGallery items={images} />
      </div>
    </Layout>
  );
}

export default IndexPage;
