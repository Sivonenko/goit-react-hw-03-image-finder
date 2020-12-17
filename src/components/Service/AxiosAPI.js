import axios from 'axios';

const axiosApiWithQuery = (query, pageNumber) => {
  const API_KEY = '&key=19529322-34fbdd4595b880ec9c46328b0';
  const BASE_Url = 'https://pixabay.com/api/';
  const PARAMETRS = `?image_type=photo&orientation=horizontal&q=`;
  const PER_PAGE = `&per_page=12`;
  const PAGE = `&page=${pageNumber}`;

  return axios
    .get(BASE_Url + PARAMETRS + query + PAGE + PER_PAGE + API_KEY)
    .then(response => response.data.hits);
};

export default axiosApiWithQuery;
