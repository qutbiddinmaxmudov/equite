import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';

interface Props {}

const Home: NextPage<Props> = ({}) => <main>123</main>;

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

Home.propTypes = {};

export default Home;
