import React, { Component } from 'react';

import axios from 'axios';

const INITIAL_STATE = {
  value: '',
};

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInput = ({ target }) => {
    // console.log(target.value);

    this.setState({ value: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { target } = e;

    axios
      .get(
        'https://pixabay.com/api/?q=cat&page=1&key=17616559-acc4465745e7b4973de900fa6&image_type=photo&orientation=horizontal&per_page=12',
      )
      .then(res => console.log(res));

    this.resetState();
  };

  resetState = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
