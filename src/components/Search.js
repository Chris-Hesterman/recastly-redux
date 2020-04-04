import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.persist();
    if (!this.debouncedSearch) {
      this.debouncedSearch = _.debounce(() => {
        let query = e.target.value;
        this.props.handleSearchInputChange(query);
      }, 1000)
    }

    this.debouncedSearch(); 
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          //value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
