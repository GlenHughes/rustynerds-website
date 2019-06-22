import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"

function MapPage () {
  return (
    <Layout>
      <SEO
        title="RustIO Live Maps"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`, `map`, `live`, `RustIO`]}
      />
      <div className="max-w-6xl mx-auto md:flex px-4 py-8 md:p-8 sm:py-0">
        <div className="w-full p-5 text-center">
          <h1 className="font-serif text-2xl">RustIO Live Maps</h1>
          <p className="font-serif mb-2">
            Both of our Rust Servers use RustIO live maps which allow you to see what's going on live! You can also login with your Steam ID and see any friends that you've added live on the map :)
          </p>
        </div>
        <div className="w-full md:flex-wrap">
          <div class="w-full md:w-1/2">
            <h2 className="font-serif text-2xl">RustyNerds x2 Live Map</h2>
            <Image filename="x2-live-map.png" />
          </div>
          <div class="w-full md:w-1/2">

          </div>
          
        </div>
      </div>
    </Layout>
  );
}

export default MapPage;
