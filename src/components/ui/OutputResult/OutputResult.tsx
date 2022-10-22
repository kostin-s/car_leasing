import { FC } from 'react';
import { InputNumber } from 'antd';

import { formatSpace } from 'utils/formulas';

import styles from './OutputResult.module.scss';

interface IOutputResult {
  result: number;
  format: string;
}

const OutputResult: FC<IOutputResult> = (props) => {
  const { result, format } = props;

  return (
    <div className={styles.wrapper}>
      <InputNumber
        className={styles.result}
        value={result}
        formatter={(value) => `${formatSpace(value)} ${format}`}
        disabled
      />
    </div>
  );
};

export default OutputResult;
