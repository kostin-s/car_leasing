export interface dataFetch {
  carCoast: number;
  initialPayment: number;
  initialPaymentPercent: number;
  leaseTerm: number;
  totalSum: number;
  monthlyPaymentFrom: number;
}

export type typeFetch = keyof dataFetch;

export enum dataConfig {
  CAR_COAST = 'carCoast',
  INITIAL_PAYMENT = 'initialPayment',
  INITIAL_PAYMENT_PERCENT = 'initialPaymentPercent',
  LEASE_TERM = 'leaseTerm',
  TOTAL_SUM = 'totalSum',
  MONTHLY_PAYMENT_FROM = 'monthlyPaymentFrom',
}
