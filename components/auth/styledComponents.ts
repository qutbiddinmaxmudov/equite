import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Devider from '@mui/material/Divider';

import styled from '@emotion/styled';
import googleIcon from '../../images/googleIcon.svg';

export const DialogWindow = styled.div`
  width: 100%;
  max-width: 620px;
  background: #101c2b;
  border-radius: 30px;
  margin: 0;
`;

export const DialogTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 70px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.03em;

  @media (max-width: 576px) {
    font-size: 34px;
  }
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

export const DialogSubtitle = styled.p`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 1em;
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

export const DialogLastWord = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  font-weight: 400;
`;

export const EnterText = styled.span`
  font-weight: 500;
  color: #f17c5f;
  cursor: pointer;
`;

export const StyledDevider = styled(Devider)`
  margin: 2em -60px 26px;
  background: #1d2f3e;

  @media (max-width: 576px) {
    margin: 2em -10px 26px;
  }
`;
