// config.js
const baseURL = 'https://gateway.marvel.com/v1/public/';
const limit = 100;
const publicKey = '<PUBLIC KEY FROM MARVEL>'; // Replace with your actual public key
const privateKey = '<PRIVATE KEY FROM MARVEL>'; // Replace with your actual private key

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
