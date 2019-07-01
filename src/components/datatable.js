import React, { Component } from "react"
import PropTypes from "prop-types";
import DataTable from "react-data-table-component"
import axios from "axios"

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
      },
      {
        name: "Kills",
        selector: "PVPKills",
        sortable: true,
      },
      {
        name: "Deaths",
        selector: "Deaths",
        sortable: true,
      },
      {
        name: "K/D",
        selector: "KDR",
        sortable: true,
      },
      {
        name: "Longest Kill (m)",
        selector: "PVPDistance",
        sortable: true,
      },
      {
        name: "Status",
        selector: "Status",
        sortable: true,
      },
    ]
  }

  componentDidMount () {
    this.fetchPlayerStats(this.props.server)
  }

  fetchPlayerStats = server => {
    console.log(`load stats from server: ${server}`)
    this.setState({ loading: true })
    axios
      .get(`http://localhost:5000/api/stats/${server}`)
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
