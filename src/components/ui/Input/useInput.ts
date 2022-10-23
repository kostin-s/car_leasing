import { typeFetch } from 'components/Content/content.interface';
import { inputType } from './input.interface';

export const useInput = (
  name: typeFetch,
  defaultValue: number,
  maxValue: number,
  minValue: number,
  handlerData: (name: typeFetch, value: number) => void,
) => {
  const onChangeSlider = (value: number) => {
    if (typeof value !== 'number' || isNaN(value)) {
      handlerData(name, value);
    }

    handlerData(name, value);
  };

  const onChangeInput = (value: inputType) => {
    if (typeof value !== 'number' || isNaN(value)) {
      return;
    }

    if (value > maxValue) {
      handlerData(name, maxValue);
    } else if (value < minValue) {
      handlerData(name, minValue);
    } else {
      handlerData(name, value);
    }
  };

  return { onChangeSlider, onChangeInput };
};
