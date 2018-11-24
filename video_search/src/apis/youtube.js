import axios from 'axios';

const API_KEY = "AIzaSyBBXU6Ggl9Q29ZEggcV7YO2mqmyhFDgaBg"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});