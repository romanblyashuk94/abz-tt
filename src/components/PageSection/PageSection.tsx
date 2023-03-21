import React, { FC } from 'react';
import { Container } from '../Conatiner/Container';
import s from './PageSection.module.scss';

interface Props {
  title: string
}

export const PageSection: FC<Props> = ({ title, children }) => {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.section__title}>{title}</h2>
        {children}
      </Container>
    </section>
  );
};
