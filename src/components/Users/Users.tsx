import React, { FC, useEffect, useState } from 'react';
import { getUsers } from '../../api/api';
import { User } from '../../types/User';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import { UserItem } from './User/UserItem';
import s from './Users.module.scss';

export const Users:FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    getUsers(currentPage).then(res => {
      setUsers(prevUsers => [...prevUsers, ...res.users]);

      if (res.page === res.total_pages) {
        setIsLastPage(true);
      }
    });
  }, [currentPage]);

  const handlePage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={s.users}>
      <ul className={s.users__list}>
        {users.map(user => <UserItem key={user.id} user={user} />)}
      </ul>
      {!isLastPage && (
        <div className={s.users__loadBtn}>
          <PrimaryBtn onClick={handlePage}>Show more</PrimaryBtn>
        </div>
      )}
    </div>
  );
};
