import { API } from '../../api/api';

export const getLastestRates = async (baseCurrency) => {
  const api = new API();
  try {
    const res = await api.get(`/latest?base=${baseCurrency}`);
    const rates = res.data;
    return rates;
  } catch (err) {
    throw Error(err);
  }
};
