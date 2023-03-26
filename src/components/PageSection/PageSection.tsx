import React, { FC } from 'react';
import { Container } from '../Conatiner/Container';
import s from './PageSection.module.scss';

interface Props {
  title: string,
  id?: string,
}

export const PageSection: FC<Props> = ({ title, id, children }) => {
  return (
    <section className={s.section} id={id}>
      <Container>
        <h2 className={s.section__title}>{title}</h2>
        {children}
      </Container>
    </section>
  );
};
