import React, { Component } from "react"
import PropTypes from "prop-types";
import DataTable from "react-data-table-component"
import axios from "axios"
import Loading from "./loading";

// @todo - make names clickable profile pages...

function convertMinutes (num) {
  const days = Math.floor(num / 1440)

}

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
      },
      {
        name: "Kills",
        selector: "PVPKills",
        sortable: true,
        center: true,
      },
      {
        name: "Deaths",
        selector: "Deaths",
        sortable: true,
        center: true,
      },
      {
        name: "K/D",
        selector: "KDR",
        sortable: true,
        center: true,
      },
      {
        name: "Longest Kill (m)",
        selector: "PVPDistance",
        sortable: true,
        center: true,
      },
      {
        name: "Time (HH:MM:SS)",
        selector: "TimePlayed",
        sortable: true,
        center: true,
      },
      {
        name: "Status",
        selector: "Status",
        sortable: true,
        format: row => {
          const { Status } = row
          return <span className={`text-bold text-${Status === "online" ? "green" : "red"}-500`}>{Status}</span>
        }
      },
    ]
  }

  componentDidMount () {
    this.fetchPlayerStats(this.props.server)
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

        this.setState({
          loading: false,
          data: results.slice(0, results.length) // why do we need to do this?
        })
      })
      .catch(error => {
        console.error(`There was an error trying to load the stats from the server: ${error}`)
        this.setState({ loading: false, error })
      })
  }

  render () {
    const { title } = this.props
    const { columns, data, loading } = this.state
    return (
      <DataTable
        title={title}
        columns={columns}
        data={data}
        progressPending={loading}
        pagination={true}
        progressComponent={<Loading />}
        progressCentered={true}
        defaultSortField="Status"
        defaultSortAsc={false}
        striped={true}
        responsive={true}
      />
    )
  }
}

StatsTable.propTypes = {
  title: PropTypes.string
};

StatsTable.defaultProps = {
  title: ``
};

export default StatsTable
