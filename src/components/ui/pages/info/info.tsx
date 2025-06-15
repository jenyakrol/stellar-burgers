import { FC, memo, ReactNode } from 'react';
import { InfoUIProps } from './type';
import styles from './info.module.css';

export const InfoUI: FC<InfoUIProps> = memo(({ title, children }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h3
        className={
          /\d/.test(title)
            ? 'text text_type_digits-default'
            : 'text text_type_main-large'
        }
      >
        {title}
      </h3>
    </div>

    {children}
  </div>
));
