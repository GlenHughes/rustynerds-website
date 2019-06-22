import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"

function SteamPage () {
  return (
    <Layout>
      <SEO
        title="Steam"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`, `steam`, `steam-kit`]}
      />
      <div className="max-w-6xl mx-auto md:flex">
        <div className="w-full md:w-1/2 p-5">
          <h1 className="font-serif text-2xl">RustyNerds' Steam Group</h1>
          <p className="font-serif mb-2">
            To stay up to date with all the latest news, updates and changes within our community be sure to join our Steam Group. As a reward for joining, you will also get access to the Steam daily kit as pictured below!
          </p>
          <Image filename="steam-kit.png" alt="Daily Steam Kit" />
          <p className="mt-4">
            <a className="btn btn-green text-white py-3 px-4 block text-center" href="https://steamcommunity.com/groups/rusty-nerds" target="_blank">Join Steam Group</a>
          </p>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <Image filename="steam-group.png" alt="RustyNerds Steam Group" />
        </div>
      </div>
    </Layout>
  );
}

export default SteamPage;
