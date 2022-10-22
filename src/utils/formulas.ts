export const calculateInitialPayment = (coast: number, percent: number) =>
  Math.ceil(coast * (percent / 100));

export const calculateMonthPay = (
  price: number,
  initial: number,
  months: number,
  percent: number,
) =>
  Math.ceil(
    (price - initial) *
      ((percent * Math.pow(1 + percent, months)) / (Math.pow(1 + percent, months) - 1)),
  );

export const calculateTotalSum = (initial: number, months: number, monthPay: number) =>
  initial + months * monthPay;

export const formatSpace = (value: number | undefined) =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
