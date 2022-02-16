/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable dot-notation */
/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { RootStateOrAny, useSelector } from 'react-redux';
import axios from 'axios';
import BookCard, { BookCardprops } from '../../molecules/BookCard/BookCard';

function Finished() {
  const AddToFinish = useSelector((state: RootStateOrAny) => state.AddToFinish);
  const [bookcards, setbookcards] = useState<BookCardprops[]>();

  useEffect(() => {
    async function getData() {
      const booksFromServer = await axios
        .get('http://localhost:6001/finished')
        .then((response: { data: any }) => response.data);
      return booksFromServer as BookCardprops[];
    }
    getData()
      .then((res) => setbookcards(res))
      .catch((reject) => console.log(reject));
  }, []);
  return (
    <Box sx={{ maxWidth: 1440, maxHeight: 1443 }} data-testid="finished">
      <Container sx={{ width: 923, ml: -6 }}>
        {AddToFinish && bookcards !== null && bookcards !== undefined
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
      </Container>
    </Box>
  );
}

export default Finished;
