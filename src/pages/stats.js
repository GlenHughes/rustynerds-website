import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Table from "../components/datatable"

class StatsPage extends Component {
  render () {
    return (
      <Layout>
        <SEO
          title="Server Stats"
          keywords={[`rustynerds`, `bugsy1440p`, `rust`, `gaming`, `stats`, `servers`, `leaderboard`, `players`]}
        />
        <div className="mx-auto px-4 mt-20">
          <div className="w-full text-center">
            <h1 className="text-4xl">RustyNerds Player Statistics</h1>
            <p className="font-serif mb-2">
              These stats are from wiped each forced wipe. That happens on the first Thursday of every month.
          </p>
          </div>
        </div>
        <div className="mx-auto md:flex px-4 sm:py-0">
          <div className="w-full md:w-1/2 p-5">
            <Table title="RustyNerds x2 Player Stats" server="x2" />
          </div>
          <div className="w-full md:w-1/2 p-5">
            <Table title="RustyNerds x5 Player Stats" server="x5" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default StatsPage;
