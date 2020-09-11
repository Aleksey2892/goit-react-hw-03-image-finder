import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const apiKey = '17616559-acc4465745e7b4973de900fa6';

const fetchImgWithQuery = async (searchQuery = '', page = 1) => {
  try {
    const axiosResp = await axios.get(
      `/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return axiosResp.data;
  } catch (err) {
    throw err;
  }
};

export default { fetchImgWithQuery };
