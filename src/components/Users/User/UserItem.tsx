import React, { FC } from 'react';
import { User } from '../../../types/User';
import s from './UserItem.module.scss';
import photoCover from './photoCover.svg';

interface Props {
  user: User
}

export const UserItem:FC<Props> = ({ user }) => {
  const {
    id, photo, name, position, email, phone,
  } = user;

  return (
    <li key={id} className={s.user}>
      <img
        className={s.user__image}
        src={photo || photoCover}
        alt="User_Photo"
      />
      <h3 className={s.user__name} title={name}>{name}</h3>
      <div className={s.user__info}>
        <p className={s.user__position} title={position}>{position}</p>
        <a
          className={s.user__mail}
          href={`mailto:${email}`}
          title={email}
        >
          {email}
        </a>

        <a
          className={s.user__phone}
          href={`tel:${phone}`}
          title={phone}
        >
          {phone}
        </a>
      </div>
    </li>
  );
};
