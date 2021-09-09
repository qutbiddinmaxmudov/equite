import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
  StyledDialog,
  DialogWindow,
  StyledTextField,
  StyledButton,
  GoogleEnterButton,
  DialogContent,
} from './styledComponents';
import { FormSchema } from '../../utils/YupSchemas';

interface Props {
  closeFunc: () => void;
  changeModal: () => void;
  isOpen: boolean;
}

const RegistrationDialog = React.memo(
  ({ closeFunc, isOpen, changeModal }: Props) => {
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
          <Typography
            variant="h1"
            component="h3"
            textAlign="center"
            fontWeight={700}
            marginTop={6}
            marginBottom={5}
          >
            Добро Пожаловать
          </Typography>
          <DialogContent>
            <Typography variant="body2" marginBottom={4}>
              Зарегистрируйтесь в системе Equite.io, чтобы перейти к Equite.
            </Typography>
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
            <Typography
              variant="overline"
              marginTop={2.5}
              marginBottom={2}
              textAlign="center"
              component="p"
            >
              ИЛИ
            </Typography>
            <GoogleEnterButton fullWidth>Продолжить с Google</GoogleEnterButton>
            <Divider
              variant="fullWidth"
              sx={{
                margin: '2em -60px 26px',
                background: '#1d2f3e',
                '@media (max-width: 576px)': {
                  margin: '2em -10px 26px',
                },
              }}
            />
            <Typography variant="body2">
              Уже есть учетная запись?{' '}
              <Typography
                component="span"
                variant="inherit"
                color="#f17c5f"
                fontWeight={500}
                sx={{ cursor: 'pointer' }}
                onClick={changeModal}
              >
                Вход в систему
              </Typography>
            </Typography>
          </DialogContent>
        </DialogWindow>
      </StyledDialog>
    );
  }
);
export default RegistrationDialog;
