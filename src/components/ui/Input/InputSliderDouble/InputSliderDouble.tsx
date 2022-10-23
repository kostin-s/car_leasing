import { FC } from 'react';
import { InputNumber, Slider } from 'antd';

import { dataFetch, typeFetch } from 'components/Content/content.interface';

import { formatSpace } from 'utils/formulas';

import { IFieldsData } from 'data/fields.interface';

import { useInput } from '../useInput';

import styles from '../Input.module.scss';
import 'styles/slider.scss';

interface IInputSliderDoubleProps {
  data: dataFetch;
  handlerData: (name: typeFetch, value: number) => void;
  info: IFieldsData;
  name: typeFetch;
}

const InputSliderDouble: FC<IInputSliderDoubleProps> = (props) => {
  const { data, handlerData, name } = props;
  const { defaultValue, maxValue, minValue, step, format, calcFormat } = props.info;
  const { onChangeInput, onChangeSlider } = useInput(
    name,
    defaultValue,
    maxValue,
    minValue,
    handlerData,
  );

  return (
    <div className={styles.wrapper}>
      <InputNumber
        className={styles.input}
        value={data.initialPayment}
        formatter={(value) => `${formatSpace(value)} ${calcFormat}`}
        disabled
      />
      <Slider
        className={styles.slider}
        max={maxValue}
        min={minValue}
        onChange={onChangeSlider}
        value={data[name]}
        step={step}
        defaultValue={data[name]}
        tooltip={{ formatter: null }}
      />
      <InputNumber
        className={styles.percent}
        min={minValue}
        max={maxValue}
        step={step}
        value={data[name]}
        onChange={onChangeInput}
        maxLength={2}
      />
      <span className={styles.format_small}>{format}</span>
    </div>
  );
};

export default InputSliderDouble;
