import React, { Component } from 'react';

import imagesApi from './services/imagesApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    images: [],
    error: '',
    searchQuery: 'popular',
    page: 1,
    totalPage: 0,
    loader: false,
  };

  componentDidMount() {
    this.setState({ loader: true });

    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;

    if (prevQuery !== newQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loader: true });

    imagesApi
      .fetchImgWithQuery(searchQuery, page)
      .then(({ hits, totalHits }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
          totalPage: totalHits,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  handleSearchBar = inputQuery => {
    this.setState({ searchQuery: inputQuery, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  render() {
    const { images, loader, page, totalPage } = this.state;
    const isShowGallery = images.length > 0;
    const isShowButton = isShowGallery && !loader && page !== totalPage;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchBar} />
        {isShowGallery && <ImageGallery images={images} />}
        {isShowButton && <Button onLoadMore={this.handleLoadMore} />}
        {loader && <Loader />}
      </>
    );
  }
}
