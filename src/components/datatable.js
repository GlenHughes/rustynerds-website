import React, { Component } from "react"
import PropTypes from "prop-types";
import DataTable from "react-data-table-component"
import axios from "axios"
import moment from "moment"

import Profile from "./profile"
import Loading from "./loading";

// @todo - make names clickable profile pages...
class StatsTable extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
    columns: [
      {
        name: "Player",
        selector: "Name",
        sortable: true,
        wrap: true,
      },
      {
        name: "Kills",
        selector: "PVPKills",
        sortable: true,
        center: true,
        wrap: true,
      },
      {
        name: "Deaths",
        selector: "Deaths",
        sortable: true,
        center: true,
        wrap: true,
      },
      {
        name: "K/D",
        selector: "KDR",
        sortable: true,
        center: true,
        wrap: true,
      },
      {
        name: "Longest Kill (m)",
        selector: "PVPDistance",
        sortable: true,
        center: true,
        wrap: true,
      },
      {
        name: "Time (HH:MM:SS)",
        selector: "TimePlayed",
        sortable: true,
        center: true,
        wrap: true,
      },
      {
        name: "Status",
        selector: "Status",
        right: true,
        sortable: true,
        wrap: true,
        format: row => {
          const { Status } = row
          return <span className={`text-bold text-${Status === "online" ? "green" : "red"}-500`}>{Status}</span>
        }
      },
    ]
  }

  componentDidMount () {
    const { server, query } = this.props
    this.fetchPlayerStats(server)
    this.filterPlayerStats(query)
  }

  componentWillReceiveProps (newProps) {
    const { query } = newProps
    this.filterPlayerStats(query)
  }

  filterPlayerStats = query => {
    console.log(`Filter player stats: ${query}`)
    const { data } = this.state
    if (!query) {
      this.setState({
        filtered: data
      })
      return
    }
    
    
    const filtered = data.filter(row => {
      return row.UserID.includes(query) || row.Name.toLowerCase().includes(query.toLowerCase())
    })
    this.setState({
      filtered,
    })
  }

  fetchPlayerStats = server => {
    // console.log(`load stats from server: ${server}`)
    // dev http://localhost:5000
    this.setState({ loading: true })
    axios
      .get(`https://api.rustynerds.com/api/stats/${server}`)
      .then(response => {
        const { data } = response
        const { results } = data
        const raw = results.slice(0, results.length) // why do we need to do this?

        this.setState({
          loading: false,
          data: raw, 
          filtered: raw,
        })
      })
      .catch(error => {
        console.error(`There was an error trying to load the stats from the server: ${error}`)
        this.setState({ loading: false, error })
      })
  }

  render () {
    const { title } = this.props
    const { columns, filtered, loading } = this.state

    return (
      <DataTable
        title={title}
        columns={columns}
        data={filtered}
        progressPending={loading}
        pagination={true}
        progressComponent={<Loading />}
        progressCentered={true}
        defaultSortField="Status"
        defaultSortAsc={false}
        striped={true}
        responsive={true}
        expandableRows
        expandableRowsComponent={<Profile />}
        />
    )
  }
}

StatsTable.propTypes = {
  title: PropTypes.string,
  query: PropTypes.string,
};

StatsTable.defaultProps = {
  title: ``,
  query: ``,
};

export default StatsTable
