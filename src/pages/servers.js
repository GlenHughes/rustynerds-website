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
            <div className="flex flex-col md:flex-row items-center mt-10 m-auto">
              <ul className="w-auto">
                {getOptions(data)}
              </ul>
            </div>
          )
        }}
      />    
    </Layout>
  );
}

function getOptions (data) {
  const items = []
  data.allServersJson.edges.forEach(server => {
    console.log(server.node)
    items.push(
      <li key={server.node.id}>
        <Server server={server.node} />
      </li>
    )
  })
  return items
}

export default ServersPage;
