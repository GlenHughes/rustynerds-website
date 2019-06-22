import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"

function DiscordPage() {
  return (
    <Layout>
      <SEO
        title="Discord"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`, `Discord`]}
      />
      <div className="max-w-6xl mx-auto md:flex">
        <div className="w-full md:w-1/2 p-5">
          <h1 className="font-serif text-2xl">RustyNerds' Discord Server</h1>
          <p className="font-serif mb-2">
            Join our Discord server and get access to the daily Discord kit (see below)! We also run giveaways with prizes including Steam keys and VIP ranks! Be sure to check the rules!
          </p>
          <Image filename="discord-kit.png" alt="Daily Discord Kit" />
          <p className="mt-4">
            <a className="btn btn-blue py-3 px-4 block text-center" href="https://discord.gg/T5u5MT6" target="_blank">Join Discord Server</a>
          </p>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <iframe src="https://discordapp.com/widget?id=567040234802511873&theme=dark" width="100%" height="325" allowtransparency="true" frameBorder="0" className="mx-auto mt-5 max-w-xl"></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default DiscordPage;
