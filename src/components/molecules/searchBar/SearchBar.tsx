/* eslint-disable quotes */
/* eslint-disable react/no-string-refs */
/* eslint-disable indent */
/* eslint-disable dot-notation */
/* eslint-disable react/jsx-indent */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, Divider, Grid, styled } from '@mui/material';
import BookCard, { BookCardprops } from '../BookCard/BookCard';

export function SearchField(props: any) {
  const { books, getFliteredBook } = props;
  const [searchValue, setSearchValue] = useState('');
  const previousSearchValue = useRef('');
  useEffect(() => {
    previousSearchValue.current = searchValue;
  }, [searchValue]);
  const [bookMatch, setBookMatch] = useState(books);
  const searchBooks = () => {
    if (searchValue !== '') {
      if (books) {
        const bookMatches = books.filter((book: BookCardprops) =>
          book.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setBookMatch(bookMatches);
        getFliteredBook(bookMatches);
      }
    } else {
      setBookMatch(books);
      getFliteredBook(books);
    }
  };
  return (
    <Box sx={{ width: 1000, mb: '80px', ml: 2 }}>
      <Container>
        <Box sx={{ mb: '80px' }} data-testid="search">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: '16px',
              justifyContent: 'space-between',
              width: 330,
              height: 30,
            }}
          >
            <SearchIcon fontSize="large" />
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchValue}
              style={{
                paddingLeft: '6%',
                paddingBottom: '1%',
                fontSize: '24px',
                outline: 'none',
                lineHeight: '30px',
                borderWidth: '0 0 0 0',
              }}
              size={50}
              onChange={(e) => {
                setSearchValue(e.target.value);
                searchBooks();
              }}
            />
          </Box>
          <Box sx={{ width: 658 }}>
            <Divider sx={{ border: '2px solid #6D787E', bgcolor: '#6D787E' }} />
          </Box>
        </Box>
      </Container>
      {/* <Box sx={{ ml: 10, mr: 6 }}>
        <Grid container rowSpacing="25px">
          {bookMatch !== null && bookMatch !== undefined
            ? bookMatch.map((book) => (
                <BookCard
                  title={book['title']}
                  author={book['author']}
                  time={book['time']}
                  reads={book['reads']}
                  image={book['image']}
                  status={book['status']}
                  progress={book['progress']}
                />
              ))
            : null}
        </Grid>
      </Box> */}
    </Box>
  );
}

// const Input = styled('input')({
//   paddingLeft: '6%',
//   paddingBottom: '1%',
//   fontSize: '24px',
//   outline: 'none',
//   lineHeight: '30px',
//   borderWidth: '0 0 0 0',

//   '::placeholder': {
//     fontWeight: '700',
//     fontSize: '24px',
//     lineHeight: '30.17px',
//     color: 'textColors.textColor3',
//   },
// });
