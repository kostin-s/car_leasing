import { FC } from 'react';

import Content from 'components/Content/Content';

import styles from './App.module.scss';

const App: FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Рассчитайте стоимость автомобиля в лизинг</h1>
      <Content />
    </section>
  );
};

export default App;
