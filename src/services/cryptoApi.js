const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-5eJLiPNGLoTNGnpD2bw9M7Vo";

const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}`;

const searchCoin = (query) => `${BASE_URL}/search?query=${query}`;

export { getCoinList, API_KEY, searchCoin };
