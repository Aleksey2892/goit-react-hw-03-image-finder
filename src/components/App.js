import React, { Component } from 'react';

import imagesApi from './services/imagesApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Error from './Error/Error';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: 'popular',
    page: 1,
    totalPage: 0,
    loader: false,
    bigImg: null,
    error: null,
  };

  componentDidMount() {
    this.setState({ loader: true });

    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevQuery !== newQuery) this.fetchImages();

    if (newPage > 2 && prevPage !== newPage) this.scrollDown();
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
          error: null,
        })),
      )
      .catch(err => this.setState({ error: err.toString() }))
      .finally(() => this.setState({ loader: false }));
  };

  scrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  handleSearchBar = inputQuery => {
    this.setState({ searchQuery: inputQuery, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  openModal = bigImg => {
    this.setState({ bigImg: bigImg });
  };

  closeModal = () => {
    this.setState({ bigImg: null });
  };

  render() {
    const { images, loader, page, totalPage, bigImg, error } = this.state;
    const isShowGallery = images.length > 0;
    const isShowButton = isShowGallery && !loader && page !== totalPage;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchBar} />

        {error && <Error error={error} />}

        {isShowGallery && (
          <ImageGallery images={images} onShowModal={this.openModal} />
        )}

        {bigImg && (
          <Modal onClose={this.closeModal}>
            <img src={bigImg} alt="big-img" />
          </Modal>
        )}

        {isShowButton && <Button onLoadMore={this.handleLoadMore} />}

        {loader && <Loader />}
      </>
    );
  }
}
