import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo.png";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`]}
      />

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <p className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
            About the RustyNerds community will be shown here
          </p>
        </div>

        <div className="w-2/3 md:w-1/3">
          <img src={logo} alt="The Original Rusty Nerd" />
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
