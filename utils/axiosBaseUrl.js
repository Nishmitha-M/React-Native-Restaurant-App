import axios from 'axios';
import { MAPS_API_KEY } from '@env';
import { INITIAL_LOCATION } from '../constants/initialLocation';
import { BASE_URL } from '../constants/baseUrl';

const { lat, lon } = INITIAL_LOCATION;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    query: 'coffee',
    ll: `${lat},${lon}`,
    open_now: 'true',
    sort: 'DISTANCE',
  },
  headers: {
    Accept: 'application/json',
    Authorization: process.env['MAPS_API_KEY'],
  },
});
