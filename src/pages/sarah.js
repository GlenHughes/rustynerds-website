import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"

function SarahPage () {
  return (
    <Layout>
      <SEO title="Srah" />
      <div className="px-4 py-8 md:p-8 sm:py-0">
        <h1>I love Sarah and Jack</h1>
      </div>
    </Layout>
  );
}

export default SarahPage;
