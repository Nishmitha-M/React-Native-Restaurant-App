import { IMAGES } from '../constants/dummyImages';

export const getRandomImages = () =>
  IMAGES[Math.floor(Math.random() * IMAGES.length)];
