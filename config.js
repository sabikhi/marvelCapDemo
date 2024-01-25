// config.js
const baseURL = 'https://gateway.marvel.com/v1/public/';
const limit = 100;
const publicKey = '71156a2ff155a6cbf3fa5813c8d17f01'; // Replace with your actual public key
const privateKey = '19efff1a2007832e2bd7f677306b831df0eb5243'; // Replace with your actual private key

const CHARACTERS_ENDPOINT = 'characters';
const COMICS_ENDPOINT = 'comics';

module.exports = {
  baseURL,
  limit,
  publicKey,
  privateKey,
  CHARACTERS_ENDPOINT,
  COMICS_ENDPOINT,
};
