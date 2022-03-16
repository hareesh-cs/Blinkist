/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable dot-notation */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Container, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCard, { BookCardprops } from '../../molecules/BookCard/BookCard';

export function BookList() {
  const [bookcards, setbookcards] = useState<BookCardprops[]>();
  useEffect(() => {
    async function getData() {
      const booksFromServer = await axios
        .get('http://localhost:6001/mylibrary')
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
        <Box sx={{ ml: -5 }} data-testid="booklist">
          <Grid container rowSpacing="25px">
            {bookcards !== null && bookcards !== undefined
              ? bookcards.map((book) => (
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
