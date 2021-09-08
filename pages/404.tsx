import type { NextPage } from 'next';
import styled from '@emotion/styled';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import { Container } from '@mui/material';

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  text-shadow: 0 0 10px white;

  @media (max-width: 576px) {
    font-size: 2em;
  }
`;

interface Props {}
const Page404: NextPage<Props> = ({}) => (
  <Container component="main">
    <Title>Круто что тебе интересно но пока что эта страница не готова</Title>
  </Container>
);

export default Page404;
