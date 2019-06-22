import React from "react";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"

function IndexPage () {
  const images = [
    {
      original: <Image filename="01.png" />,
      thumbnail: <Image filename="01.png" />,
    },
    {
      original: <Image filename="03.png" />,
      thumbnail: <Image filename="03.png" />,
    },
    {
      original: <Image filename="04.png" />,
      thumbnail: <Image filename="04.png" />,
    },
    {
      original: <Image filename="05.png" />,
      thumbnail: <Image filename="05.png" />,
    },
  ]
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
