import React from "react";
import Slider from "react-slick";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"
import { Link } from "gatsby";

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
      <div className="max-w-6xl mx-auto mt-5 justify-between p-6 text-center">
        <h2 className="text-5xl font-serif">What is RustyNerds?</h2>
        <p className="max-w-2xl">RustyNerds was created by <a href="https://www.facebook.com/bugsygaminghd" className="text-blue-500 underline" target="_blank">Bugsy1440p</a> with the simple intention of creating a like-minded gaming community where players from all over the world could play together and make new friends.</p>
        <p className="max-w-2xl mt-4">The Rust servers were designed with how <a href="https://www.facebook.com/bugsygaminghd" className="text-blue-500 underline" target="_blank">Bugsy1440p</a> liked to play the game and that has now evolved for over 2 and a half years from player feedback to become one of the <span className="font-bold underline">best-modded</span> server setups within the Rust community!</p>
      </div>
      <div className="max-w-6xl mx-auto mt-5 justify-between p-6 md:flex">
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-4xl font-serif">RustyNerds Web Shop</h2>
          <p>Purchase upgrades through our online web store. All VIP upgrades and RP purchases are automatically applied to your account within 60 seconds!</p>
          <Link className="btn btn-blue inline-block mt-5" to="/shop">Visit Shop</Link>
        </div>
        <div className="w-full md:w-1/2 text-center mt-4 md:mt-0">
          <h2 className="text-4xl font-serif">Server Stats</h2>
          <p>View the current live server stats to see how you compare to the other players on our servers.</p>
          <Link className="btn btn-green inline-block mt-5" to="/stats">View Stats</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-0 md:mt-5 justify-between py-0 px-6 md:py-6 md:flex">
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-4xl font-serif">Claim the Discord Kit</h2>
          <p>Get access to our daily Discord kit which you can claim by simply joining our Discord server! This is by far the best way to speak to the staff on our servers and report any issues you may be having. All important updates are also posted here!</p>
          <Link className="btn btn-blue inline-block mt-5" to="/discord">Join Discord</Link>
        </div>
        <div className="w-full md:w-1/2 text-center pb-5 mt-4 md:mt-0">
          <h2 className="text-4xl font-serif">Join our Steam Group</h2>
          <p>By joining our Steam Group you get access to the latest news and updates from the team! We reward you for doing this by granting you access to the Steam daily kit!</p>
          <Link className="btn btn-blue inline-block mt-5" to="/steam">Join Steam</Link>
        </div>
      </div>
      
    </Layout>
  );
}

export default IndexPage;
