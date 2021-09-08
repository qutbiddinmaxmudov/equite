import Button from '@mui/material/Button';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useCallback } from 'react';

import logo from '../../images/logo.png';
import RegistrationDialog from '../auth/RegistrationDialog';
import SignInDialog from '../auth/SignInDialog';
import {
  StyledHeader,
  StyledContainer,
  LogoLink,
  HeaderList,
  HeaderLink,
} from './styledComponents';

const navLinks = [
  {
    path: '/',
    text: 'Главная',
  },
  {
    path: '/blog',
    text: 'Блог',
  },
  {
    path: '/rating',
    text: 'Рейтинг',
  },
];

const Header = () => {
  const router = useRouter();
  const [modal, setModal] = useState<false | 'signIn' | 'registration'>(false);
  const locale = router.locale === 'ru' ? 'en' : 'ru';

  const closeModal = useCallback(() => setModal(false), []);
  const openRegister = useCallback(() => setModal('registration'), []);
  const openSignIn = useCallback(() => setModal('signIn'), []);

  return (
    <>
      <StyledHeader>
        <StyledContainer maxWidth="lg" component="nav">
          <Link href="/" passHref>
            <LogoLink>
              <Image src={logo} alt="Equite company logo" />
            </LogoLink>
          </Link>
          <HeaderList>
            {navLinks.map(({ path, text }) => (
              <Link key={path} href={path} passHref>
                <HeaderLink className={path === router.route ? 'active' : ''}>
                  {text}
                </HeaderLink>
              </Link>
            ))}
          </HeaderList>
          <HeaderList>
            <Link href="/pro" passHref>
              <HeaderLink>PRO</HeaderLink>
            </Link>
            <Link href={router.asPath} locale={locale} passHref>
              <HeaderLink className="purple">{locale.toUpperCase()}</HeaderLink>
            </Link>
            <HeaderLink as="button" className="button" onClick={openSignIn}>
              Войти
            </HeaderLink>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                padding: '10px 2em',
                marginLeft: '2rem',
              }}
              onClick={openRegister}
            >
              Зарегистрироваться
            </Button>
          </HeaderList>
        </StyledContainer>
      </StyledHeader>
      <RegistrationDialog
        closeFunc={closeModal}
        isOpen={modal === 'registration'}
        changeModal={openSignIn}
      />
      <SignInDialog
        closeFunc={closeModal}
        isOpen={modal === 'signIn'}
        changeModal={openRegister}
      />
    </>
  );
};

export default Header;
