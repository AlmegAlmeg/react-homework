import http from "./httpService";
const apiUrl = process.env.REACT_APP_API_URL;

export const getCards = () => http.get(`${apiUrl}/cards/cards`);

export const createCard = card => http.post(`${apiUrl}/cards`, card)