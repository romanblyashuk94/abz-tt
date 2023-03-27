/* eslint-disable no-debugger */
import React, { FC, useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import { User } from '../../../types/User';
import s from './UserItem.module.scss';
import photoCover from './photoCover.svg';

interface Props {
  user: User
}

export const UserItem:FC<Props> = ({ user }) => {
  const {
    id, name, position, email, phone,
  } = user;

  const [photo, setPhoto] = useState(user.photo);

  useEffect(() => {
    fetch(photo).catch(() => {
      setPhoto(photoCover);
    });
  }, []);

  return (
    <li key={id} className={s.user}>
      <img
        className={s.user__image}
        src={photo}
        alt="User_Photo"
      />

      <Tooltip title={name}>
        <h3 className={s.user__name}>{name}</h3>
      </Tooltip>

      <div className={s.user__info}>
        <p className={s.user__position} title={position}>{position}</p>
        <Tooltip title={email}>
          <a
            className={s.user__mail}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </Tooltip>

        <Tooltip title={phone}>
          <a
            className={s.user__phone}
            href={`tel:${phone}`}
          >
            {phone}
          </a>
        </Tooltip>
      </div>
    </li>
  );
};
