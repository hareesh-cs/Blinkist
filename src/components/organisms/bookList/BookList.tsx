/* eslint-disable react/jsx-props-no-spreading */
import { Box, Container, Grid } from '@mui/material';
import BookCard from '../../molecules/BookCard/BookCard';
import books from '../../../db.json';

export function BookList() {
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
