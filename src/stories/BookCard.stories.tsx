/* eslint-disable @typescript-eslint/no-var-requires */
import BookCard from '../components/molecules/BookCard/BookCard';

const image2 = require('../components/atoms/Images/2.png');

export default {
  title: 'molecules/BookCard',
  component: BookCard,
};

export const component = () => (
  <BookCard
    image={image2}
    title="Bring your Human to Work"
    author="Erica Keswin"
    time="13"
    reads="1.5"
    progress={88}
  />
);
