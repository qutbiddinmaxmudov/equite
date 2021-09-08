import Devider from '@mui/material/Divider';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  StyledDialog,
  DialogWindow,
  DialogSubtitle,
  StyledTextField,
  StyledButton,
  FormDevider,
  GoogleEnterButton,
  DialogLastWord,
  EnterText,
  DialogTitle,
  DialogContent,
} from './styledComponents';
import { FormSchema } from '../../utils/YupSchemas';

interface Props {
  closeFunc: () => void;
  changeModal: () => void;
  isOpen: boolean;
}

const SignInDialog = React.memo(({ closeFunc, isOpen, changeModal }: Props) => {
  const form = useForm({
    mode: 'onChange',
    shouldFocusError: false,
    resolver: yupResolver(FormSchema),
  });

  const consoleSubmit = (data) => console.log(data);

  return (
    <StyledDialog
      open={isOpen}
      onClose={closeFunc}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogWindow>
        <DialogTitle>Привет!</DialogTitle>
        <DialogContent>
          <DialogSubtitle>
            Зайди в систему Equite.io, чтобы перейти к Equite.
          </DialogSubtitle>
          <form action="" onSubmit={form.handleSubmit(consoleSubmit)}>
            <StyledTextField
              {...form.register('email')}
              label="Адрес электронной почты"
              variant="filled"
              name="email"
              error={!!form.formState.errors.email?.message}
              helperText={form.formState.errors.email?.message}
              fullWidth
            />
            <StyledTextField
              {...form.register('password')}
              label="Пароль"
              variant="filled"
              name="password"
              error={!!form.formState.errors.password?.message}
              helperText={form.formState.errors.password?.message}
              type="password"
              fullWidth
            />
            <StyledButton
              variant="contained"
              type="submit"
              disabled={!form.formState.isValid}
              fullWidth
            >
              Продолжить
            </StyledButton>
          </form>
          <FormDevider>ИЛИ</FormDevider>
          <GoogleEnterButton fullWidth>Зайти с Google</GoogleEnterButton>
          <Devider
            variant="fullWidth"
            sx={{ margin: '2em -60px 26px', background: '#1D2F3E' }}
          />
          <DialogLastWord>
            Нет учетной записи?{' '}
            <EnterText onClick={changeModal}>Зарегистрироваться</EnterText>
          </DialogLastWord>
        </DialogContent>
      </DialogWindow>
    </StyledDialog>
  );
});
export default SignInDialog;
