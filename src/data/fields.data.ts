import {
  calculateInitialPayment,
  calculateMonthPay,
  calculateTotalSum,
} from 'utils/formulas';

import { IFieldsData, IInfoData } from './fields.interface';

const percent = 0.035;

const carCoast: IFieldsData = {
  title: 'Стоимость автомобиля',
  minValue: 1000000,
  maxValue: 6000000,
  step: 10000,
  defaultValue: 3300000,
  format: '₽',
};

const initialPaymentPercent: IFieldsData = {
  title: 'Первоначальный взнос',
  minValue: 10,
  maxValue: 60,
  step: 1,
  defaultValue: 13,
  format: '%',
  calcFormat: '₽',
};

const leaseTerm: IFieldsData = {
  title: 'Срок лизинга',
  minValue: 1,
  maxValue: 60,
  step: 1,
  defaultValue: 60,
  format: 'мес.',
};

const initialPayment: number = calculateInitialPayment(
  carCoast.defaultValue,
  initialPaymentPercent.defaultValue,
);

const monthlyPaymentFrom: IInfoData = {
  title: 'Ежемесячный платеж от',
  defaultValue: calculateMonthPay(
    carCoast.defaultValue,
    initialPayment,
    leaseTerm.defaultValue,
    percent,
  ),
  format: '₽',
};

const totalSum: IInfoData = {
  title: 'Сумма договора лизинга',
  defaultValue: calculateTotalSum(
    initialPayment,
    leaseTerm.defaultValue,
    monthlyPaymentFrom.defaultValue,
  ),
  format: '₽',
};

export {
  carCoast,
  initialPayment,
  initialPaymentPercent,
  leaseTerm,
  totalSum,
  monthlyPaymentFrom,
  percent,
};
