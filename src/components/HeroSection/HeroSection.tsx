import React, { FC } from 'react';
import s from './HeroSection.module.scss';

import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import { useScroll } from '../../assets/style_utils/hooks/useScroll';

export const HeroSection:FC = () => {
  const scrollToSection = useScroll();

  return (
    <section className={s.hero}>
      <div className={s.hero__content}>
        <h1 className={s.hero__title}>Test assignment for front-end developer</h1>
        <p className={s.hero__text}>
          What defines a good front-end developer is one that has skilled knowledge
          of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll
          be building web interfaces with accessibility in mind. They should also be excited
          to learn,as the world of Front-End Development keeps evolving.
        </p>
        <div className={s.hero__button}>
          <PrimaryBtn onClick={() => scrollToSection('form')}>
            Sign Up
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};
