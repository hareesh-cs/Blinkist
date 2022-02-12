/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Container, Grid, Typography } from '@mui/material';
import BookCard from '../../molecules/BookCard/BookCard';
import books from '../../../db1.json';

export function EBooks() {
  return (
    <div>
      <Container>
        <Box data-testid="ebooks">
          <Typography
            fontFamily="Cera Pro"
            fontSize="24px"
            sx={{
              color: '#03314B',
              width: 194,
              height: 30,
              mb: '20px',
              ml: 2,
            }}
          >
            Trending Blinks
          </Typography>
        </Box>
        <Box sx={{ ml: 2 }}>
          <Grid
            container
            rowSpacing="25px"
            columnSpacing={{ xs: 2, sm: 3, md: 3 }}
          >
            {books.map((book: any) => (
              <BookCard {...book} />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
