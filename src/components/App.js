import React, { Component } from 'react';

import imagesApi from '../services/imagesApi';
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
    isModalImg: null,
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

  handleSearchBar = inputQuery => {
    this.setState({ searchQuery: inputQuery, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ loader: true });

    try {
      const { hits, totalHits } = await imagesApi.fetchImgWithQuery(
        searchQuery,
        page,
      );

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        page: prevState.page + 1,
        totalPage: totalHits,
        error: null,
      }));
    } catch (err) {
      this.setState({ error: err.toString() });
    } finally {
      this.setState({ loader: false });
    }
  };

  openModal = isModalImg => {
    this.setState({ isModalImg: isModalImg });
  };

  closeModal = () => {
    this.setState({ isModalImg: null });
  };

  scrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { images, loader, page, totalPage, isModalImg, error } = this.state;
    const isShowGallery = images.length > 0;
    const isShowButton = isShowGallery && !loader && page !== totalPage;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchBar} />

        {error && <Error error={error} />}

        {isShowGallery && (
          <ImageGallery images={images} onShowModal={this.openModal} />
        )}

        {isModalImg && (
          <Modal onClose={this.closeModal}>
            <img src={isModalImg} alt="big-img" />
          </Modal>
        )}

        {isShowButton && <Button onLoadMore={this.handleLoadMore} />}

        {loader && <Loader />}
      </>
    );
  }
}
