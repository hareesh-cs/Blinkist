/* eslint-disable comma-dangle */
import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import BookCard from '../../molecules/BookCard/BookCard';
import { getState } from '../../../actions/AddToFinish';

function Finished() {
  const AddToFinish = useSelector((state: RootStateOrAny) => state.AddToFinish);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:6001/finished')
      .then((res) => res.json())
      .then(
        (data) => dispatch(getState(data)),
        (err) => dispatch({ type: 'FAILURE', err })
      );
  });
  return (
    <Box sx={{ maxWidth: 1440, maxHeight: 1443 }} data-testid="finished">
      <Container sx={{ width: 923, ml: -6 }}>
        {AddToFinish && (
          <BookCard
            title="Beyond Entrepreneurship"
            author="Jim Collins & Bill Lazier"
            time="13"
            image="/Images/2.png"
            progress={292}
          />
        )}
      </Container>
    </Box>
  );
}

export default Finished;
