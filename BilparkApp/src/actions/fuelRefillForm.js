export const RESET_FUELREFILL_FORM = 'RESET_FUELREFILL_FORM';
export const SET_FUELREFILL_FORM_DATE = 'SET_FUELREFILL_FORM_DATE';
export const SET_FUELREFILL_FORM_RATE = 'SET_FUELREFILL_FORM_LITERS';
export const SET_FUELREFILL_FORM_PRICE = 'SET_FUELREFILL_FORM_TOTALPRICE';

export function setDate(date) {
  return {
    type: SET_FUELREFILL_FORM_DATE,
    date,
  };
}
export function setRate(rate) {
  return {
    type: SET_FUELREFILL_FORM_RATE,
    rate,
  };
}
export function setPrice(price) {
  return {
    type: SET_FUELREFILL_FORM_PRICE,
    price,
  };
}
export function reset() {
  return {
    type: RESET_FUELREFILL_FORM,
  };
}
