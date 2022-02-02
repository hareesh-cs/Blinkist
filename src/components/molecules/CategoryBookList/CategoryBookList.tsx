/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Grid, Typography, ThemeProvider } from '@mui/material';
import theme from '../../../Theme/theme';
import BookCard from '../BookCard/BookCard';

export interface BookType {
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  imagePath: string;
  owned?: boolean;
}

interface CategoryBookListProps {
  title: string;
  bookList: BookType[];
}

function CategoryBookList({ title, bookList }: CategoryBookListProps) {
  const boxStyling = {
    margin: '5% 18.5% 5% 18.5%',
    padding: ' 0%',
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxStyling}>
        <Typography variant="h3" marginBottom="30px">
          {title}
        </Typography>
        <Grid container>
          {bookList.map((book) => (
            <Grid
              item
              xs={4}
              marginBottom="5%"
              style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
            >
              <BookCard {...book} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default CategoryBookList;
