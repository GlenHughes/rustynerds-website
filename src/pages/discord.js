import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function DiscordPage() {
  return (
    <Layout>
      <SEO
        title="Discord"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`, `Discord`]}
      />

      <div className="text-center">
        <div className="mx-auto mt-5 md:mt-10 sm:mt-12">
          <p className="">Join our Discord server and get access to the daily Discord kit! We also run giveaways with prizes including Steam keys and VIP ranks!</p>
        </div>
        <iframe src="https://discordapp.com/widget?id=567040234802511873&theme=dark" width="100%" height="500" allowtransparency="true" frameborder="0" className="mx-auto mt-5"></iframe>
      </div>
    </Layout>
  );
}

export default DiscordPage;
