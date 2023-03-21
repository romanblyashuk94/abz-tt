import React, { FC } from 'react';
import s from './Container.module.scss';

export const Container: FC = ({ children }) => {
  return (
    <div className={s.container}>
      {children}
    </div>
  );
};
