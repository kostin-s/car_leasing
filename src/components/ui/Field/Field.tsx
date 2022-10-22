import { FC, PropsWithChildren } from 'react';

import styles from './Field.module.scss';

interface IFieldsDataProps {
  title: string;
}

const Field: FC<PropsWithChildren<IFieldsDataProps>> = (props) => {
  const { title, children } = props;

  return (
    <div className={styles.field}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Field;
