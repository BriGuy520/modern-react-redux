import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c26c12591b8eae6e0fb09793d12fdcf38f783c7bab1ba3340d61b5a1025dfd42'
  }
});