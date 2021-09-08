import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

interface Props {}
const Home: NextPage<Props> = ({}) => <main>123</main>;

export default Home;
