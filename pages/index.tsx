import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import servicesBackground from '../images/bitcoin.png';
import resultsBackground from '../images/Illustration.png';

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

interface BlockContentWrapperProps {
  right?: boolean;
}

const BlockContentWrapper = styled.div<BlockContentWrapperProps>`
  width: 100%;
  max-width: 584px;
  ${(props) =>
    props.right
      ? `
    margin-left:auto;
    @media(max-width:576px){
      text-align:right
    }
  `
      : ''}
`;

const MainTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.4;
  margin-bottom: 1.5em;
  @media (max-width: 576px) {
    font-size: 2em;
  }
`;

const MainButton = styled(Button)`
  background: #3f51b5;
  box-shadow: 0px 0px 15px rgba(41, 54, 125, 0.3);
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  padding: 14px 2em;
  margin-top: 2rem;
  color: #ffffff;
`;

const ServicesBlock = styled.section`
  padding-top: 225px;
  padding-bottom: 215px;
  position: relative;
  @media (max-width: 576px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const ServicesBackground = styled.div`
  position: absolute;
  right: 20px;
  top: -100px;
  pointer-events: none;
  z-index: -1;
  @media (max-width: 900px) {
    opacity: 0.5;
  }
`;

const ResultsBlock = styled.section`
  position: relative;
  padding-top: 215px;
  padding-bottom: 300px;
  @media (max-width: 576px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const ResultsBackground = styled.div`
  position: absolute;
  left: 20px;
  top: 0px;
  pointer-events: none;
  z-index: -1;
  @media (max-width: 900px) {
    opacity: 0.5;
  }
`;

interface Props {}
const Home: NextPage<Props> = ({}) => (
  <main>
    <ServicesBlock>
      <Container>
        <BlockContentWrapper>
          <MainTitle>
            Иструмент мониторинга для трейдера, которому доверяют
          </MainTitle>
          <p>
            Создайте портфолио со своими фактическими успехами — повысьте
            доверие у заинтересованных людей.
          </p>
          <MainButton variant="contained">Начать работу</MainButton>
        </BlockContentWrapper>
      </Container>
      <ServicesBackground>
        <Image src={servicesBackground} alt="Иллюстрация" />
      </ServicesBackground>
    </ServicesBlock>
    <ResultsBlock>
      <Container>
        <BlockContentWrapper right>
          <MainTitle>Проверенные результаты</MainTitle>
          <p>
            Объективные и сухие цифры подойдут не только для мониторинга своих
            результатов, но и для того, чтобы вызвать доверие у инвесторов
            или своей публики.
          </p>
          <MainButton variant="contained">Начать работу</MainButton>
        </BlockContentWrapper>
      </Container>
      <ResultsBackground>
        <Image src={resultsBackground} alt="Иллюстрация" />
      </ResultsBackground>
    </ResultsBlock>
  </main>
);

export default Home;
