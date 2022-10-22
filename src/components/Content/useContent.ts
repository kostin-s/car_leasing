import { useState } from 'react';
import { dataConfig, dataFetch, typeFetch } from './content.interface';

import {
  carCoast,
  initialPayment,
  initialPaymentPercent,
  leaseTerm,
  monthlyPaymentFrom,
  percent,
  totalSum,
} from 'data/fields.data';

import {
  calculateInitialPayment,
  calculateMonthPay,
  calculateTotalSum,
} from 'utils/formulas';

export const useContent = () => {
  const [data, setData] = useState<dataFetch>({
    carCoast: carCoast.defaultValue,
    initialPayment: initialPayment,
    initialPaymentPercent: initialPaymentPercent.defaultValue,
    leaseTerm: leaseTerm.defaultValue,
    totalSum: totalSum.defaultValue,
    monthlyPaymentFrom: monthlyPaymentFrom.defaultValue,
  });

  const handlerData = (name: typeFetch, value: number) => {
    const result = { ...data, [`${name}`]: value };

    if (dataConfig.CAR_COAST === name || dataConfig.INITIAL_PAYMENT_PERCENT === name) {
      result.initialPayment = calculateInitialPayment(
        result.carCoast,
        result.initialPaymentPercent,
      );
    }

    if (
      dataConfig.CAR_COAST === name ||
      dataConfig.INITIAL_PAYMENT_PERCENT === name ||
      dataConfig.LEASE_TERM === name
    ) {
      result.monthlyPaymentFrom = calculateMonthPay(
        result.carCoast,
        result.initialPayment,
        result.leaseTerm,
        percent,
      );
    }

    if (
      dataConfig.CAR_COAST === name ||
      dataConfig.INITIAL_PAYMENT_PERCENT === name ||
      dataConfig.LEASE_TERM === name ||
      dataConfig.MONTHLY_PAYMENT_FROM === name
    ) {
      result.totalSum = calculateTotalSum(
        result.initialPayment,
        result.leaseTerm,
        result.monthlyPaymentFrom,
      );
    }

    setData({
      ...result,
    });
  };

  return { data, handlerData };
};
