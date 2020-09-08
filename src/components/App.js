import React, { Component } from 'react';

import imagesApi from './services/imagesApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    error: '',
    searchQuery: 'popular',
    page: 1,
    totalPage: 0,
    loader: false,
    showModal: false,
    bigImg: null,
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
        })),
      )
      .catch(error => this.setState({ error }))
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

  toogleModal = ({ target }) => {
    const bigImg = target.getAttribute('data-bigImg');
    this.setState({ showModal: true, bigImg: bigImg });
  };

  closeModal = () => {
    this.setState({ showModal: false, bigImg: '' });
  };

  render() {
    const { images, loader, page, totalPage, showModal, bigImg } = this.state;
    const isShowGallery = images.length > 0;
    const isShowButton = isShowGallery && !loader && page !== totalPage;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchBar} />
        {isShowGallery && (
          <ImageGallery images={images} onShowModal={this.toogleModal} />
        )}
        {showModal && (
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
