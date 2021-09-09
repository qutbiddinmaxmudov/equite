import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import servicesBackground from '../images/bitcoin.png';
import resultsBackground from '../images/Illustration.png';

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
        <Grid item lg={6} md={9}>
          <Typography variant="h2">
            Иструмент мониторинга для трейдера, которому доверяют
          </Typography>
          <Typography>
            Создайте портфолио со своими фактическими успехами — повысьте
            доверие у заинтересованных людей.
          </Typography>
          <MainButton variant="contained">Начать работу</MainButton>
        </Grid>
      </Container>
      <ServicesBackground>
        <Image src={servicesBackground} alt="Иллюстрация" />
      </ServicesBackground>
    </ServicesBlock>
    <ResultsBlock>
      <Container>
        <Grid item lg={6} md={9} marginLeft="auto">
          <Typography variant="h2">Проверенные результаты</Typography>
          <Typography>
            Объективные и сухие цифры подойдут не только для мониторинга своих
            результатов, но и для того, чтобы вызвать доверие у инвесторов
            или своей публики.
          </Typography>
        </Grid>
      </Container>
      <ResultsBackground>
        <Image src={resultsBackground} alt="Иллюстрация" />
      </ResultsBackground>
    </ResultsBlock>
  </main>
);

export default Home;
