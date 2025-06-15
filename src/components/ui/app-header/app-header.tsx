import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { Outlet } from 'react-router-dom';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({
  userName,
  onProfileClick,
  onFeedClick,
  onConstructorClick
}) => (
  <>
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <>
            <BurgerIcon type={'primary'} />
            <p
              className='text text_type_main-default ml-2 mr-10'
              onClick={onConstructorClick}
            >
              Конструктор
            </p>
          </>
          <>
            <ListIcon type={'primary'} />
            <p
              className='text text_type_main-default ml-2'
              onClick={onFeedClick}
            >
              Лента заказов
            </p>
          </>
        </div>
        <div className={styles.logo}>
          <Logo className='' />
        </div>
        <div onClick={onProfileClick} className={styles.link_position_last}>
          <ProfileIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>
            {userName || 'Личный кабинет'}
          </p>
        </div>
      </nav>
    </header>
    <Outlet />
  </>
);
