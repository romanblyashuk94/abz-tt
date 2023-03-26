import React, { FC } from 'react';
import { useScroll } from '../../assets/style_utils/hooks/useScroll';
import { Container } from '../Conatiner/Container';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import s from './Header.module.scss';
import logo from './logo.svg';

export const Header: FC = () => {
  const scrollToSection = useScroll();

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__content}>
          <a className={s.logo} href="/">
            <img
              className={s.logo__image}
              src={logo}
              alt="logo"
            />
          </a>
          <ul className={s.header__buttonsList}>
            <li className={s.header__buttonsItem}>
              <PrimaryBtn onClick={() => scrollToSection('users')}>
                Users
              </PrimaryBtn>
            </li>
            <li className={s.header__buttonsItem}>
              <PrimaryBtn onClick={() => scrollToSection('form')}>
                Sign up
              </PrimaryBtn>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};
