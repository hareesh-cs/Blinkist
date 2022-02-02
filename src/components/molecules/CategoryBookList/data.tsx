/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-plusplus */
const image3 = require('../../atoms/Images/3.png');

export interface BookType {
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  imagePath: string;
  owned?: boolean;
}
const makeBookList = () => {
  const list: Array<BookType> = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      title: 'Testing',
      author: 'me',
      readTime: '15',
      reads: '100',
      imagePath: image3,
      owned: true,
    });
  }
  return list;
};

export const bookList = makeBookList();

export const title = 'Blinks';
