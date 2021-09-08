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
  StyledDevider,
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
          <DialogTitle>Добро Пожаловать</DialogTitle>
          <DialogContent>
            <DialogSubtitle>
              Зарегистрируйтесь в системе Equite.io, чтобы перейти к Equite.
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
            <GoogleEnterButton fullWidth>Продолжить с Google</GoogleEnterButton>
            <StyledDevider variant="fullWidth" />
            <DialogLastWord>
              Уже есть учетная запись?{' '}
              <EnterText onClick={changeModal}>Вход в систему</EnterText>
            </DialogLastWord>
          </DialogContent>
        </DialogWindow>
      </StyledDialog>
    );
  }
);
export default RegistrationDialog;
