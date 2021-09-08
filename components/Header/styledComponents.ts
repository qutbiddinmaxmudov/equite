import Container from '@mui/material/Container';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  padding-top: 40px;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled.a`
  margin-right: 40px;
  display: flex;
`;
export const HeaderList = styled.div`
  display: flex;
  align-items: center;

  &:last-child {
    margin-left: auto;
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
