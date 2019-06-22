import React from "react";
import ImageGallery from "react-image-gallery";
import Slider from "react-slick";


import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"

function IndexPage () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`]}
      />
      <div className="text-center">
        <Slider {...settings}>
          <div>
            <Image filename="01.png" />
          </div>
          <div>
            <Image filename="02.png" />
          </div>
          <div>
            <Image filename="03.png" />
          </div>
          <div>
            <Image filename="04.png" />
          </div>
          <div>
            <Image filename="05.png" />
          </div>
        </Slider>
      </div>
    </Layout>
  );
}

export default IndexPage;
