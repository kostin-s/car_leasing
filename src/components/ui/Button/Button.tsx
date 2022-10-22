import { FC } from 'react';

import styles from './Button.module.scss';

interface IButton {
  name: string;
}

const Button: FC<IButton> = ({ name }) => {
  return <button className={styles.button}>{name}</button>;
};

export default Button;
