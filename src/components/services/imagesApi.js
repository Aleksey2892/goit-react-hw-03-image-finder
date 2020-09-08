import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const apiKey = '17616559-acc4465745e7b4973de900fa6';

const fetchImgWithQuery = (searchQuery = '', page = 1) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data);
};

export default { fetchImgWithQuery };
