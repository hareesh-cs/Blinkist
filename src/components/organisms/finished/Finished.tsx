import React from 'react';
import { Box, Container } from '@mui/material';
// import { RootStateOrAny, useSelector } from 'react-redux';
import BookCard from '../../molecules/BookCard/BookCard';

function Finished() {
  // const AddToFinish = useSelector((state: RootStateOrAny) => state.AddToFinish);
  return (
    <Box sx={{ maxWidth: 1440, maxHeight: 1443 }} data-testid="finished">
      <Container sx={{ width: 923, ml: -6 }}>
        <BookCard
          title="Beyond Entrepreneurship"
          author="Jim Collins & Bill Lazier"
          time="13"
          image="/Images/2.png"
          progress={292}
        />
      </Container>
    </Box>
  );
}
// AddToFinish &&
export default Finished;
