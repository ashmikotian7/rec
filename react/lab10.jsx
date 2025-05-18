import React, { Component } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      searchQuery: '',
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      this.setState({ data, filteredData: data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.filterData();
    }
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  filterData = () => {
    const { data, searchQuery } = this.state;
    if (searchQuery.trim() === '') {
      this.setState({ filteredData: data });
    } else {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ filteredData });
    }
  };

  renderError = () => {
    const { error } = this.state;
    return error ? <div>Error: {error}</div> : null;
  };

  render() {
    const { filteredData, searchQuery, loading } = this.state;

    return (
      <div>
        <h1>User Explorer</h1>

        {this.renderError()}

        <input
          type="text"
          value={searchQuery}
          onChange={this.handleSearchChange}
          placeholder="Search user by name..."
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No results found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <button onClick={this.fetchData}>Refresh</button>
      </div>
    );
  }
}

export default DataFetcher;