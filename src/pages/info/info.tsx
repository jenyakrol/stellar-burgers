import { FC, ReactNode } from 'react';
import { InfoUI } from '@ui-pages';

type InfoProps = {
  title: string;
  children: ReactNode;
};

export const Info: FC<InfoProps> = ({ title, children }) => (
  <InfoUI title={title}>{children}</InfoUI>
);
