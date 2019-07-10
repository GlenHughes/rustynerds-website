import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Table from "../components/datatable"

class StatsPage extends Component {
  state = {
    query: "",
  }

  constructor (props) {
    super(props)
    this.search = this.search.bind(this)
  }
  
  search (event) {
    const query = event.target.value
    console.log(`search clicked with query: ${query}`)
    this.setState({
      query,
    })
  }

  render () {
    const { query } = this.state
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
              These stats are forced wiped each month. That happens on the first Thursday of every month.
          </p>
          </div>
        </div>
        <div className="mx-auto px-4 sm:py-0">
          <div className="w-full p-0 sm:p-5">
            <form className="w-full max-w-md">
              <div className="flex items-center border-b border-b-2 border-red-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Username or SteamID" aria-label="Username or SteamID" value={this.state.query} onChange={this.search} />
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto xl:flex px-4 sm:py-0">
          <div className="w-full xl:w-1/2 p-0 sm:p-5">
            <Table title="RustyNerds x2 Player Stats" server="x2" query={query} />
          </div>
          <div className="w-full xl:w-1/2 p-0 sm:p-5">
            <Table title="RustyNerds x5 Player Stats" server="x5" query={query} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default StatsPage;
