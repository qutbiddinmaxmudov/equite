import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledHeader = styled.header`
  padding-top: 40px;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LogoLink = styled.a`
  margin-right: 40px;
  display: flex;
  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 2em;
  }
`;
export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 2em;
  }

  &:last-child {
    margin-left: auto;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 900px) {
      margin-left: 0;
    }
  }
`;
export const HeaderLink = styled.a`
  margin: 0 1em;
  font-size: 16px;
  line-height: 150%;
  color: #fff;
  font-weight: 400;
  text-decoration: none;

  &.active {
    font-weight: 600;
  }

  &.purple {
    font-weight: 500;
    color: #6a7ce0;
    cursor: pointer;
  }

  &.button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    padding: 0;
  }
`;

export const HeaderButton = styled(Button)`
  padding: 10px 2em;
  margin-left: 2em;
  @media (max-width: 900px) {
    margin-left: 0;
    display: block;
    width: 100%;
    max-width: 300px;
    margin-top: 10px;
  }
`;
