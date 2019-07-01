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
      <div className="max-w-6xl mx-auto my-8 justify-between p-6 md:flex">
        <div className="w-full md:w-1/2 text-center px-3">
          <h2 className="text-4xl font-serif">RustyNerds Web Shop</h2>
          <p>Purchase upgrades through our online web store. All VIP upgrades and RP purchases are automatically applied to your account within 60 seconds!</p>
          <a className="btn btn-blue inline-block mt-5">Visit Shop</a>
        </div>
        <div className="w-full md:w-1/2 text-center px-3">
          <h2 className="text-4xl font-serif">Server Stats</h2>
          <p>View the current live server stats to see how you compare to the other players on our servers.</p>
          <a className="btn btn-green inline-block mt-5">View Stats</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-8 justify-between p-6 md:flex">
        <div className="w-full md:w-1/2 text-center px-3">
          <h2 className="text-4xl font-serif">Claim the Discord Kit</h2>
          <p>Get access to our daily Discord kit which you can cliam by simply joining our Discord server! This is by far the best way to speak to the staff on our servers and report any issues you maybe having. All important updates are also posted here!</p>
          <a className="btn btn-blue inline-block mt-5">Join Discord</a>
        </div>
        <div className="w-full md:w-1/2 text-center px-3">
          <h2 className="text-4xl font-serif">Join our Steam Group</h2>
          <p>By joining our Steam Group you get access to the latest news and updates from the team! We reward you for doing this by granting you access to the Steam daily kit!</p>
          <a className="btn btn-blue inline-block mt-5">View Stats</a>
        </div>
      </div>
      
    </Layout>
  );
}

export default IndexPage;
