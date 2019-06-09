import React from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Server from "../components/server"

function ServersPage () {
  return (
    <Layout>
      <SEO
        title="Discord"
        keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`, `servers`]}
      />
      <StaticQuery
        query={graphql`
        query ServersQuery {
          allServersJson {
            edges {
              node {
                id
                name
                ip
                port
                banner
                plugins
              }
            }
          }
        }
      `}
        render={data => {
          // console.log(data)
          return (
              <ul className="flex flex-col lg:flex-row items-center mt-10 -mx-2">
                {getOptions(data)}
              </ul>
          )
        }}
      />    
    </Layout>
  );
}

function getOptions (data) {
  const items = []
  data.allServersJson.edges.forEach(server => {
    const { id } = server.node
    items.push(
      <li key={id} className="lg:w-1/2 sm:w-full"><Server server={server.node} /></li>
    )
  })
  return items
}

export default ServersPage;
