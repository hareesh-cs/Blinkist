/* eslint-disable react/jsx-props-no-spreading */
import { Box, Container, Grid } from '@mui/material';
import BookCard from '../../molecules/BookCard/BookCard';
import books from '../../../db.json';

export function BookList() {
  return (
    <div>
      <Box sx={{ maxWidth: 1440, maxHeight: 1443 }}>
        <Container>
          <Box sx={{ ml: -5 }} data-testid="blist">
            <Grid container rowSpacing="25px">
              {books.map((book: any) => (
                <BookCard {...book} />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
