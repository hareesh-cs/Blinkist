/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookCard from '../../molecules/BookCard/BookCard';
import books from '../../../db.json';
import { getState } from '../../../actions/AddToFinish';

export function BookList() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:6001/ebooks')
      .then((res) => res.json())
      .then(
        (data) => dispatch(getState(data)),
        (err) => dispatch({ type: 'FAILURE', err })
      );
  });
  return (
    <div>
      <Container>
        <Box sx={{ ml: -5 }}>
          <Grid container rowSpacing="25px">
            {books.map((book: any) => (
              <BookCard {...book} />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
