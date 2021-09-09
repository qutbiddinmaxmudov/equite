import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';

import styled from '@emotion/styled';
import googleIcon from '../../images/googleIcon.svg';

export const DialogWindow = styled.div`
  max-width: 620px;
  background: #101c2b;
  border-radius: 30px;
  margin: 0;
`;

export const DialogContent = styled.div`
  margin-top: 37px;
  background: #142634;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  padding: 44px 60px 50px;
  @media (max-width: 576px) {
    padding: 20px 10px 30px;
  }
`;

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background: transparent;
    border-radius: 30px;
  }

  .MuiPaper-elevation {
    margin: 10px;
    max-width: calc(100% - 20px);
    max-height: calc(100% - 20px);
  }
`;

export const StyledTextField = styled(TextField)`
  background: #101c2b;
  border-radius: 5px;
  margin-bottom: 20px;

  & label {
    font-weight: 300;
    color: #fff;
    font-size: 14px;
    top: 3px;
  }

  & .MuiFilledInput-underline::before,
  & .MuiFilledInput-underline:hover::before {
    border-bottom-color: transparent;
  }

  & .MuiFormHelperText-filled {
    position: absolute;
    bottom: -20px;
  }
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(86.33deg, #ff7e62 0%, #ffda55 100%);
  box-shadow: 0px 0px 30px rgba(212, 194, 238, 0.4);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: 500;
  font-size: 14px;
  color: #101c2b;
`;

export const FormDevider = styled.p`
  margin-top: 20px;
  margin-bottom: 13px;
  text-align: center;
`;

export const GoogleEnterButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101c2b;
  box-shadow: 0px 0px 30px rgba(212, 194, 238, 0.4);
  border-radius: 5px;
  padding: 10px 0;

  &::before {
    content: url(${googleIcon.src});
    display: block;
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
