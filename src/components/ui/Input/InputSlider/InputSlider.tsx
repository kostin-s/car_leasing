import { FC } from 'react';
import { InputNumber, Slider } from 'antd';

import { dataFetch, typeFetch } from 'components/Content/content.interface';

import { formatSpace } from 'utils/formulas';

import { IFieldsData } from 'data/fields.interface';

import { useInput } from '../useInput';

import styles from '../Input.module.scss';
import 'styles/slider.scss';

interface IInputSliderProps {
  data: dataFetch;
  handlerData: (name: typeFetch, value: number) => void;
  info: IFieldsData;
  name: typeFetch;
}

const InputSlider: FC<IInputSliderProps> = (props) => {
  const { data, handlerData, name } = props;
  const { maxValue, minValue, step, defaultValue, format } = props.info;
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
        value={data[name]}
        onChange={onChangeInput}
        min={minValue}
        max={maxValue}
        step={step}
        formatter={(value) => `${formatSpace(value)}`}
      />
      <Slider
        className={styles.slider}
        value={data[name]}
        onChange={onChangeSlider}
        min={minValue}
        max={maxValue}
        step={step}
        defaultValue={data[name]}
        tooltip={{ formatter: null }}
      />
      <span className={styles.format}>{format}</span>
    </div>
  );
};

export default InputSlider;
