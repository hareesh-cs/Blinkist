/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable dot-notation */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard, { BookCardprops } from '../../molecules/BookCard/BookCard';
import { SearchField } from '../../molecules/searchBar/SearchBar';

export function EBooks() {
  const [bookMatch, setBookMatch] = useState([]);
  const [bookcards, setbookcards] = useState<BookCardprops[]>();
  useEffect(() => {
    async function getData() {
      const booksFromServer = await axios
        .get('http://localhost:6001/ebooks')
        .then((response: { data: any }) => response.data);
      return booksFromServer as BookCardprops[];
    }
    getData()
      .then((res) => setbookcards(res))
      .catch((reject) => console.log(reject));
  }, []);
  return (
    <div>
      <Container>
        <Box sx={{ ml: 7 }} data-testid="ebooks">
          <SearchField
            books={bookcards}
            getFliteredBook={(e: any) => setBookMatch(e)}
          />
          <Typography
            fontFamily="Cera Pro"
            fontSize="24px"
            sx={{
              color: '#03314B',
              width: 194,
              height: 30,
              mb: '20px',
              ml: 4,
            }}
          >
            Trending Blinks
          </Typography>
        </Box>
        <Box sx={{ ml: 10, mr: 6 }}>
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
        </Box>
      </Container>
    </div>
  );
}
