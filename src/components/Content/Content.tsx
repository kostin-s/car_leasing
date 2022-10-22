import { FC } from 'react';

import Field from 'components/ui/Field/Field';
import InputSlider from 'components/ui/Input/InputSlider/InputSlider';
import InputSliderDouble from 'components/ui/Input/InputSliderDouble/InputSliderDouble';
import OutputResult from 'components/ui/OutputResult/OutputResult';
import Button from 'components/ui/Button/Button';

import { useContent } from './useContent';

import { buttonSend } from 'data/button.data';
import {
  carCoast,
  initialPaymentPercent,
  leaseTerm,
  totalSum,
  monthlyPaymentFrom,
} from 'data/fields.data';

import { dataConfig } from './content.interface';

import styles from './Content.module.scss';

const Content: FC = () => {
  const { data, handlerData } = useContent();

  return (
    <div className={styles.content}>
      <div className={styles.fields}>
        <Field title={carCoast.title}>
          <InputSlider
            data={data}
            handlerData={handlerData}
            info={carCoast}
            name={dataConfig.CAR_COAST}
          />
        </Field>

        <Field title={initialPaymentPercent.title}>
          <InputSliderDouble
            data={data}
            handlerData={handlerData}
            info={initialPaymentPercent}
            name={dataConfig.INITIAL_PAYMENT_PERCENT}
          />
        </Field>

        <Field title={leaseTerm.title}>
          <InputSlider
            data={data}
            handlerData={handlerData}
            info={leaseTerm}
            name={dataConfig.LEASE_TERM}
          />
        </Field>
      </div>

      <div className={styles.result}>
        <Field title={totalSum.title}>
          <OutputResult result={data.totalSum} format={totalSum.format} />
        </Field>

        <Field title={monthlyPaymentFrom.title}>
          <OutputResult
            result={data.monthlyPaymentFrom}
            format={monthlyPaymentFrom.format}
          />
        </Field>

        <div className={styles.buttonWrapper}>
          <Button name={buttonSend} />
        </div>
      </div>
    </div>
  );
};

export default Content;
