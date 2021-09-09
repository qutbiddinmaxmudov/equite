import type { NextPage } from 'next';
import React from 'react';
import { Container, Typography } from '@mui/material';

interface Props {}
const Page404: NextPage<Props> = ({}) => (
  <Container component="main">
    <Typography variant="h1">
      Круто что тебе интересно но пока что эта страница не готова
    </Typography>
  </Container>
);

export default Page404;
